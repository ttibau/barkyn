import { ButtonComponent } from '../components/elements/ButtonComponent';
import { render, waitFor } from '@testing-library/react';
import 'jest-styled-components';
const renderComponent = ({label}) => 
    render (
        <ButtonComponent label={label} />
    )

test('should render button component with correctly properties', async  () => {
    const { getByText }= renderComponent({ label: 'TEST'})
    await waitFor(() => getByText('TEST'))
})