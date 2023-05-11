import carHeaderOne from '../assets/images/carHeaderOne.png'
const HomePage = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 text-white rounded-lg">
                <div className="flex flex-col gap-5 items-start">
                    <span className="block font-semibold text-2xl">The Best Platform
                        <br></br>
                        for Car Rental
                    </span>

                    <span className="block">Ease of doing a car rental safely and
                        <br></br>
                        reliably. Of course at a low price
                    </span>
                    <button className="bg-blue-500 px-4 py-2 rounded">Rental Car</button>
                </div>
                <img src={carHeaderOne} alt="car" className='mx-auto w-2/3' />
            </div>
        </div>
    );
}

export default HomePage;