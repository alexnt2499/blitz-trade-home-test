import { FC } from "react";

interface ISpinner {
  customClassName?: string | undefined;
  size?: number;
}

const Spinner: FC<ISpinner> = ({ customClassName, size }) => {
  return (
    <div role="status">
      <svg
        style={{ width: size, height: size }}
        className={`animate-spin h-5 w-5 text-blue-400 ${customClassName}`}
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60C47.464 60 60 47.464 60 32C60 16.536 47.464 4 32 4ZM0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
          fill="#E8E8E8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 32C60 16.536 47.464 4 32 4V0C49.6731 0 64 14.3269 64 32H60Z"
          fill="#266EF1"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
