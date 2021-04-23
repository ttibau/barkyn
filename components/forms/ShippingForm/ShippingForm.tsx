import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { 
    InputWrapper, 
    BtnSection
 } from './styles';
import { InputComponent } from '../../elements/InputComponent';
import { ButtonComponent } from '../../elements/ButtonComponent';

interface IShippingForm {
    submit: () => any;
}

const ShippingForm = ({ submit } : IShippingForm) => {
    const schema = Yup.object().shape({ 
        name: Yup.string().required('This field is required'),
        email: Yup.string().email().required('This field is required'),
        address: Yup.string().required('This field is required'),
        postal_code: Yup.string().required('This field is required'),
        country: Yup.string().required('This field is required'),
        phone: Yup.string().required('This field is required'),
    })
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
                    label="Name"
                    type="text"
                    {...register(`name`, { required: true })}
                    error={errors.name ? errors.name.message : undefined}
                />
                <InputComponent 
                    label="E-mail"
                    type="text"
                    {...register(`email`, { required: true })}
                    error={errors.email ? errors.email.message : undefined}
                />
            </InputWrapper>
            <InputComponent 
                label="Address"
                type="text"
                {...register(`address`, { required: true })}
                error={errors.address ? errors.address.message : undefined}
            />
            <InputComponent 
                label="Postal code"
                type="text"
                {...register(`postal_code`, { required: true })}
                error={errors.postal_code ? errors.postal_code.message : undefined}
            />
            <InputComponent 
                label="Country"
                type="text"
                {...register(`country`, { required: true })}
                error={errors.country ? errors.country.message : undefined}
            />
            <InputComponent 
                label="Phone"
                type="text"
                {...register(`phone`, { required: true })}
                error={errors.phone ? errors.phone.message : undefined}
            />
            <BtnSection>
                <ButtonComponent onClick={(e:any) =>  {e.preventDefault(); router.back()}} label="Cancel" /> 
                <ButtonComponent label="Next" active/>
            </BtnSection>
        </form>
    )
}


export { ShippingForm }