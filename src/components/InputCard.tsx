import { Input, Typography } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

export const InputCard = () => {
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };

  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <div className="bg-white bg-opacity-60 rounded-xl shadow-lg w-full max-w-md p-4 mt-4">
      <Title level={5}> Your answer </Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} length={8} {...sharedProps} />
    </div>
  );
}   