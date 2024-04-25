import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
interface ArrowType {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
    className: string;
}

export const Arrow = ({
    children,
    disabled,
    onClick,
    className,
}: ArrowType) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                opacity: disabled ? "0" : "1",
            }}
            className={`${className}`}
        >
            {children}
        </button>
    );
};

export const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
        React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );
    React.useEffect(() => {
        // NOTE: detect if whole component visible
        if (visibleElements.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleElements]);

    return (
        <Arrow
            disabled={disabled}
            className={`${disabled ? "left-disabled" : "visible"}`}
            onClick={() => scrollPrev()}
        >
            {/* <SlArrowLeft /> */}
            <FaChevronLeft />
        </Arrow>
    );
};

export const RightArrow = () => {
    const { isLastItemVisible, scrollNext, visibleElements } =
        React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !visibleElements.length && isLastItemVisible
    );
    React.useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleElements]);

    return (
        <Arrow
            disabled={disabled}
            className={`${disabled ? "right-disabled" : "visible"}`}
            onClick={() => scrollNext()}
        >
            {/* <SlArrowRight /> */}
            <FaChevronRight />
        </Arrow>
    );
};

export const onWheel = (
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
): void => {
    const isTouchPad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isTouchPad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
};
