import { FC } from 'react';
import s from './Hero.module.css';
import Link from 'next/link';
import Container from '../Container';

interface Props {
    headLine: string;
    description: string;
}

const Hero: FC<Props> = ({ headLine, description }) => {
    return (
        <div className="bg-black">
            <Container el={`div` as any}>
                <div className={s.root}>
                    <h2 className={s.headLine}>
                        {headLine}
                    </h2>
                    <div className="flex-1 max-w-4xl">
                        <p className={s.description}>
                            {description}
                        </p>
                        <Link className={s.link} href="/">
                            Reacd is here
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Hero;
