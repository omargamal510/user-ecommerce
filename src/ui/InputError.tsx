interface InputErrorProps {
  error?: string;
}

function InputError({ error }: InputErrorProps) {
  return (
    <>
      <div className="input-error bg-red-300 text-white p-2 rounded-lg my-2">
        <p className="text-xs">🚫 {error}</p>
      </div>
    </>
  );
}

export default InputError;
