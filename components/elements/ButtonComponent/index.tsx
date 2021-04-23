import {BtnLabel, ButtonWrapper} from './styles';

interface IButtonComponentProps {
    label: string;
    btnType?: string;
}

const ButtonComponent = ({ label, btnType }: IButtonComponentProps) => {
    return (
        <ButtonWrapper btnType={btnType}>
            <BtnLabel>
                {label}
            </BtnLabel>
        </ButtonWrapper>
    )
}


export { ButtonComponent }