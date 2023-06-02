import { fireEvent, render } from '@testing-library/react'
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialState={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    })

    it("count should increment by 1 if the decrement button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialState={0} />);
        const incrementButton = getByRole("button", {name: 'Increment'})
        expect(Number(getByTestId("count").textContent)).toEqual(0);
        fireEvent.click(incrementButton)
        expect(Number(getByTestId("count").textContent)).toEqual(1)
    })
})