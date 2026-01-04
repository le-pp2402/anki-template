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
    <div className="bg-white bg-opacity-70 rounded-xl shadow-md w-full max-w-sm p-3 mt-3 sm:max-w-lg sm:p-4">
      <Title level={5} className="!mb-2"> Your answer </Title>
      <div className="flex items-center gap-2">
        <Input.OTP
          className="flex-1 min-w-0"
          formatter={(str) => str.toUpperCase()}
          length={word.length}
          {...sharedProps}
        />
        <Button color="primary" variant="filled" size="middle" className="whitespace-nowrap" onClick={() => showBackSide()}>
          Check
        </Button>
      </div>
    </div>
  );
}   