import {BtnLabel, ButtonWrapper} from './styles';

interface IButtonComponentProps {
    label: string;
    btnType?: string;
    active?: boolean;
}

const ButtonComponent = ({ label, btnType, active }: IButtonComponentProps) => {
    return (
        <ButtonWrapper btnType={btnType} active={active}>
            <BtnLabel active={active}>
                {label}
            </BtnLabel>
        </ButtonWrapper>
    )
}


export { ButtonComponent }