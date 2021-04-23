import { 
    ContainerWrap, 
} from './styles'
import successAnimation from '../../../assets/success.json';
import Lottie from 'react-lottie';
import { ButtonComponent } from 'components/elements/ButtonComponent';

const SuccessPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: successAnimation,
    };
    return (
        <ContainerWrap>
            <Lottie
                options={defaultOptions}
                width={100}
                height={100}
            />
           Payment Successful 
           Your payment was successful. You now continue to Barkyn
           <ButtonComponent label="Barkyn" active />
        </ContainerWrap>
    )    
}

export {SuccessPage }