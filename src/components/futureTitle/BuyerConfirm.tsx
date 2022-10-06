import { Button, Divider, Flex, Modal, Text } from "@chakra-ui/react";
import { BuyerDialProps } from "../../types/Buyer";

export default function BuyerConfirm({ title, amount, source, setReady, sourceEq }: BuyerDialProps) {
    return (
        <>{/* <Modal>
            <Flex flex={1} w='100%' direction='column' color={'white'}>
                <Flex gap={3} justify='center' flex='1'textAlign='center' display='flex' flexDirection='column' fontSize='2xl'>
                    <Text overflowWrap='anywhere'>Payment To <b>{title}</b></Text>
                    <Divider />
                    <b>{amount + '$'}</b>
                    <Divider />
                    Using Source <b>{ } { sourceEq + ' ' + source.symbol}</b>
                    <Button w='100px' alignSelf='center' mt={7} variant='solid' colorScheme='green' children={'Confirm'} />
                </Flex>
            </Flex>
        </Modal> */}</>
    )
}