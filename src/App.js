import Counter from './components/Counter';

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh] text-center'>
      <Counter initialState={0} />
    </div>
  );
}

export default App;
