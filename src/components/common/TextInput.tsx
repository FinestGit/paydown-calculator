import { ChangeEvent, Dispatch, FC, ReactNode, SetStateAction } from "react";

/**
 * Interface for TextInput component properties.
 */
interface TextInputProperties {
  /**
   * The label text for the input field.
   */
  inputLabel: string;
  /**
   * The name attribute for the input element.
   */
  name: string;
  /**
   * The placeholder text for the input element.
   */
  placeholder: string;
  /**
   * The id attribute for the input element, used for linking the label to the input.
   */
  id: string;
  /**
   * The className that will contribute to the styling of the TextInput.
   */
  className?: string;
  /**
   * The value of the input.
   */
  value: string;
  /**
   * The function to call when the input value changes.
   *
   * @param value - The new value of the input element.
   */
  onChange: Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  onBlur?: () => void;
}

/**
 * TextInput component.
 *
 * This functional component renders a labeled input field. It accepts properties
 * that specify the label text, input name, placeholder text, and id for the input element,
 * the current value of the input, and a function to handle changes to the input value.
 *
 * @param {TextInputProperties} props - The properties object containing inputLabel, name, placeholder, id, className, value, and onChange.
 * @returns {ReactNode} The JSX to render the labeled input field.
 *
 * @example
 * <TextInput
 *    inputLabel="Username"
 *    name="username"
 *    placeholder="Enter your username"
 *    id="username-input"
 *    className="custom-class"
 *    value={username}
 *    onChange={setUsername}
 * />
 */
const TextInput: FC<TextInputProperties> = ({
  inputLabel,
  name,
  placeholder,
  id,
  className = "",
  value,
  onChange,
  onBlur = () => {},
}: TextInputProperties): ReactNode => {
  return (
    <div className={className}>
      <label htmlFor={id}>{inputLabel}</label>
      <input
        name={name}
        placeholder={placeholder}
        id={id}
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        onBlur={() => onBlur()}
      />
    </div>
  );
};

export default TextInput;
