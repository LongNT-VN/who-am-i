import { ScrollArea } from '@mantine/core'
import { FC, forwardRef, Ref, useRef } from 'react'
import About from '../about/about'
import Home from '../home/home'


interface ContentProps {
    target: Ref<HTMLDivElement>;
}

const Content: FC<ContentProps> = forwardRef(({ target }) => {
    const currentViewport = useRef<HTMLDivElement>(null);
    return (
        <ScrollArea offsetScrollbars scrollbarSize={14} viewportRef={currentViewport}>
            <Home />
            <About target={target} />
        </ScrollArea >

    )
})
export default Content