import { fireEvent, render } from '@testing-library/react'
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialState={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    })

    it("count should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialState={0} />);
        const incrementButton = getByRole("button", { name: 'Increment' })
        expect(Number(getByTestId("count").textContent)).toEqual(0);
        fireEvent.click(incrementButton)
        expect(Number(getByTestId("count").textContent)).toEqual(1)
    })

    it("count should decrement by 1 decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialState={0} />)
        const decrementButton = getByRole("button", { name: "Decrement" })
        expect(Number(getByTestId('count').textContent)).toEqual(0)
        fireEvent.click(decrementButton)
        expect(Number(getByTestId('count').textContent)).toEqual(-1)
    })

    it("count should be 0 if the restart button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialState={50} />)
        const restartButton = getByRole("button", { name: "Reset" })
        expect(Number(getByTestId('count').textContent)).toEqual(50)
        fireEvent.click(restartButton)
        expect(Number(getByTestId('count').textContent)).toEqual(0)
    })

    it("count should invert signs if the switch signs button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialState={50} />)
        const switchButton = getByRole('button', {name: "Revert"})
        expect(Number(getByTestId('count').textContent)).toEqual(50)
        fireEvent.click(switchButton)
        expect(Number(getByTestId('count').textContent)).toEqual(-50)
    })
})