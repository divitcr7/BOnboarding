import { StackedFormProvider } from './StackedFormProvider';
import StackedMultiStepFormItem, {
  StackedMultiStepFormItemProps,
} from './StackedMultiStepFormItem';

export interface StackedMultiStepFormProps {
  data: Omit<StackedMultiStepFormItemProps, 'id'>[];
  isExpandableDisabled?: boolean;
}

export function StackedMultiStepForm({
  data,
  isExpandableDisabled,
}: StackedMultiStepFormProps) {
  return (
    <StackedFormProvider data={data}>
      {data.map((props, i) => (
        <StackedMultiStepFormItem
          isExpandableDisabled={isExpandableDisabled}
          {...props}
          id={i}
          key={`StackedMultiStepFormItem${i}`}
        />
      ))}
    </StackedFormProvider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { useStackedMultiStepForm } from './StackedFormProvider';
