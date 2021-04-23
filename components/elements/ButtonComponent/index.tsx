import {BtnLabel, ButtonWrapper} from './styles';

interface IButtonComponentProps {
    label: string;
}

const ButtonComponent = ({ label }: IButtonComponentProps) => {
    return (
        <ButtonWrapper>
            <BtnLabel>
                {label}
            </BtnLabel>
        </ButtonWrapper>
    )
}


export { ButtonComponent }