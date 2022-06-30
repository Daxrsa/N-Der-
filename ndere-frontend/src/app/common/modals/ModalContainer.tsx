import { Box, Modal, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";

export default observer(function ModalContainer() {
    const {modalStore} = useStore();

    return (
        <Modal open={true} onClose={modalStore.closeModal}>
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {/* {modalStore.modal.body} */}
                    <h1 id="modal-title">Test</h1>
                </Typography>
            </Box>
        </Modal>
    )
})