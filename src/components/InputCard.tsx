import { Button, Input, Typography } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

export const InputCard = ({ word, setUserAnswer, showBackSide }: { word: string, setUserAnswer: (value: string) => void, showBackSide: () => void }) => {
  const onChange: OTPProps['onChange'] = (text) => {
    setUserAnswer(text);
    showBackSide();
  };

  const onInput: OTPProps['onInput'] = (value) => {
    setUserAnswer(value.join(''));
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <div className="bg-white bg-opacity-60 rounded-xl shadow-lg w-full max-w-lg p-4 mt-4">
      <Title level={5}> Your answer </Title>
      <div className="flex items-center gap-2">
        <Input.OTP formatter={(str) => str.toUpperCase()} length={word.length} {...sharedProps} />
        <Button color="primary" variant="filled" className="border-8" onClick={() => showBackSide()}> Check </Button>
      </div>
    </div>
  );
}   