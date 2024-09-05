interface InputErrorProps {
  error?: string;
}

function InputError({ error }: InputErrorProps) {
  return (
    <>
      <div className="input-error  text-red-500  rounded-lg mt-2">
        <p className="text-xs">🚫 {error}</p>
      </div>
    </>
  );
}

export default InputError;
