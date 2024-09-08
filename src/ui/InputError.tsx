interface InputErrorProps {
  error?: string;
}

function InputError({ error }: InputErrorProps) {
  return (
    <>
      <div className="input-error  text-red-500  rounded-lg mt-2">
        <span className="text-xs text-red-500">🚫 {error}</span>
      </div>
    </>
  );
}

export default InputError;
