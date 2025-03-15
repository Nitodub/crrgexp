'use client'
import {useLocalStorage, useReadLocalStorage} from 'usehooks-ts'

export default function Component() {
  const [value, setValue, removeValue] = useLocalStorage("Dub-cookie", 0);
  let dubCookie = useReadLocalStorage('Dub-cookie')

  return (
    <div>
      <p>Count: {value}</p>
      <button
        onClick={() => {
          setValue((x: number) => x + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue((x: number) => x - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          removeValue();
        }}
      >
        Reset
      </button>
      <p>{dubCookie ? 'Nice one' : 'Fuck Off'}</p>
    </div>
  );
}
