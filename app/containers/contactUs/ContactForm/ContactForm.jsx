'use client';

import { FormProvider, useForm } from 'react-hook-form';
import RHFInput from '../../../components/fields/RHFInput/RHFInput';
import RHFInputPhone from '../../../components/fields/RHFInputPhone/RHFInputPhone';
import RHFTextarea from '../../../components/fields/RHFTextarea/RHFTextarea';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    }
  });
  const { handleSubmit, watch, formState: { isDirty, isSubmitting, errors } } = methods

  const onSubmit = async (values) => {
    // call
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
        <h2>Connect with us</h2>
        <div className={styles.formRow}>
          <RHFInput name="name" placeholder="Name" />
          <RHFInput name="email" placeholder="Email" type="email" />
        </div>
        <RHFInputPhone name="phone" />
        <RHFInput name="address" placeholder="Address" />
        <RHFTextarea name="message" placeholder="Message" />
        <button type='submit' disabled={!isDirty || isSubmitting} className={styles.btn}>submit</button>
      </form>
    </FormProvider>
  )
}

export default ContactForm