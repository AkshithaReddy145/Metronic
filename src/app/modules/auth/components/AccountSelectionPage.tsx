import {useEffect, useRef, useState} from 'react'
import { ErrorMessage, Field,Form, Formik, FormikValues} from 'formik';
import {Link} from 'react-router-dom'
import { KTIcon } from '../../../../_metronic/helpers';
import { StepperComponent } from '../../../../_metronic/assets/ts/components';
import {createAccountSchemas, ICreateAccount, inits} from '../../wizards/components/CreateAccountWizardHelper';


// import './App.css'; // Assuming you have a CSS file for styling

export function AccountSelectionPage () {
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const [ stepper, setStepper ] = useState<StepperComponent | null>(null)
    const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
    const [initValues] = useState<ICreateAccount>(inits)
  
    const loadStepper = () => {
      setStepper(StepperComponent.createInsance(stepperRef.current as HTMLDivElement))
    }
  
    const prevStep = () => {
      if (!stepper) {
        return
      }
  
      stepper.goPrev()
  
      setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1])
    }
  
    const submitStep = (values: ICreateAccount, actions: FormikValues) => {
      if (!stepper) {
        return
      }
  
      if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
        stepper.goNext()
      } else {
        stepper.goto(1)
        actions.resetForm()
      }
  
      console.log(values);
  
      setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1])
    }
  
    useEffect(() => {
      if (!stepperRef.current) {
        return
      }
  
      loadStepper()
    }, [stepperRef])
  

  return (
    <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
    {() => (
    <Form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-gray-900'>
          Choose Account Type
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-500 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='personal'
              id='kt_create_account_form_account_type_personal'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_account_type_personal'
            >
              <KTIcon iconName='address-book' className='fs-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>Personal Account</span>
                <span className='text-gray-500 fw-bold fs-6'>
                  If you need more info, please check it out
                </span>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='corporate'
              id='kt_create_account_form_account_type_corporate'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_account_type_corporate'
            >
              <KTIcon iconName='briefcase' className='fs-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>Corporate Account</span>
                <span className='text-gray-500 fw-bold fs-6'>
                  Create corporate account to mane users
                </span>
              </span>
            </label>
          </div>

          <div className='text-danger mt-2'>
            <ErrorMessage name='accountType' />
          </div>
        </div>
      </div>
    </div>
    <div className='d-flex flex-stack pt-10'>
                {/* <div className='mr-2'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                  >
                    <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                    Back
                  </button>
                </div> */}

                <div>

                  <button type='submit' className='btn btn-lg btn-primary me-3'>
                    <span className='indicator-label'>
                    <Link to='/auth' className='btn btn-sm btn-primary'> Continue</Link>
                    </span>
                  </button>
                </div>
              </div>
    </Form>
     )}
     </Formik>
  );
};
