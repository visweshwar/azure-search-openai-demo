import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the climate like in Oak Ridge?",
        value: "What is the climate like in Oak Ridge?"
    },
    {
        text: "What are the projected population and growth rates for ROI Counties?",
        value: "What are the projected population and growth rates for ROI Counties?"
    },
    { text: "What are the public education impacts?", value: "What are the public education impacts?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
