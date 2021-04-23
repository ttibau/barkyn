import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { 
    InputWrapper, 
    BtnSection
 } from './styles';
import { InputComponent } from '../../elements/InputComponent';
import { ButtonComponent } from '../../elements/ButtonComponent';
import valid from 'card-validator';

interface IPaymentForm {
    submit: () => any;
}

const PaymentForm = ({ submit } : IPaymentForm) => {
   
    const schema = Yup.object().shape({
        creditCardNumber: Yup.string()
        .test(
            `test-number`,
            `Invalid credit card number`,
            (value) => valid.number(value).isValid,
        )
        .required(`Required field`),
        creditCardExpirationDate: Yup.string()
        .typeError(`Invalid date. Example: MM/YY`)
        .max(5, `Invalid date. Example: MM/YY`)
        .matches(
            /([0-9]{2})\/([0-9]{2})/,
            `Invalid date. Example: MM/YY`,
        )
        .required(`Required field`),
        creditCardCVV: Yup.string().min(3).max(4).required(`Required field`),
        creditCardHolder: Yup.string().required(`Required field`),
  });    


    const {register,  handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    
    const onSubmit = (formData:any) => {
        submit();
    } 
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
                <InputComponent 
                    label="Credit card number"
                    type="text"
                    {...register(`creditCardNumber`, { required: true })}
                    error={errors.creditCardNumber ? errors.creditCardNumber.message : undefined}
                />
            </InputWrapper>
            <InputWrapper>
                <InputComponent 
                    label="Expiration Date"
                    type="text"
                    {...register(`creditCardExpirationDate`, { required: true })}
                    error={errors.creditCardExpirationDate ? errors.creditCardExpirationDate.message : undefined}
                />
                <InputComponent 
                    label="Credit card CVV"
                    type="text"
                    {...register(`creditCardCVV`, { required: true })}
                    error={errors.creditCardCVV ? errors.creditCardCVV.message : undefined}
                />
            </InputWrapper>
            <InputComponent 
                label="Credit card Holder"
                type="text"
                {...register(`creditCardHolder`, { required: true })}
                error={errors.creditCardHolder ? errors.creditCardHolder.message : undefined}
            />
            
            <BtnSection>
                <ButtonComponent onClick={(e:any) =>  {e.preventDefault(); router.back()}} label="Cancel" /> 
                <ButtonComponent label="Next" active/>
            </BtnSection>
        </form>
    )
}


export { PaymentForm }