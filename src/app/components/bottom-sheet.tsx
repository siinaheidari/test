import {FC, PropsWithChildren} from "react";
import { Sheet } from 'react-modal-sheet';
// @ts-ignore
import {SheetProps} from "react-modal-sheet/src/types";

const BottomSheet: FC<PropsWithChildren & SheetProps> = ({children, ...rest}) => {
    return (
        <Sheet {...rest} >
            <Sheet.Container >
                <Sheet.Header/>
                <Sheet.Content className={"!px-4"}>{children}</Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onTap={rest.onClose}  />
        </Sheet>
    );
};

export default BottomSheet;
