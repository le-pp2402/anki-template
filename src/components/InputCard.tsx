import { Input, Typography } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

export const InputCard = ({ word, setUserAnswer }: { word: string, setUserAnswer: (value: string) => void }) => {
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
    setUserAnswer(text);
  };

  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
    setUserAnswer(value.join(''));
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <div className="bg-white bg-opacity-60 rounded-xl shadow-lg w-full max-w-md p-4 mt-4">
      <Title level={5}> Your answer </Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} length={word.length} {...sharedProps} />
    </div>
  );
}   