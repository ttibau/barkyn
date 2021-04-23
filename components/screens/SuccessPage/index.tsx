import { 
    ContainerWrap,
    SuccessContainer, 
    SuccessTitle,
    SuccessSubtitle
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
            <SuccessContainer>
                <Lottie
                    options={defaultOptions}
                    width={150}
                    height={150}
                />
                <SuccessTitle>
                    Payment Successful
                </SuccessTitle>
                <SuccessSubtitle>
                    Your payment was successful. You now continue to Barkyn
                </SuccessSubtitle>
                <a href="http://barkyn.com">
                    <ButtonComponent label="Barklyn" active />
                </a>
           </SuccessContainer>
        </ContainerWrap>
    )    
}

export {SuccessPage }