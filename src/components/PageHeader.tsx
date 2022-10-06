import { Flex, Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { AppIcon } from "../assets"
import { compressAddress } from "../utils/formats"
import { firstLetterToUpper } from "../utils/formats"
import MetaConnect from "./MetaConnect"

export default function ViewHeader({ path, styleProps }: any) {
    let comp = useSelector((x: any) => x.comp)
    let account = '0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC'
    return (
        <Flex w='100%' p='1rem .7rem' justify='space-between' align='center' {...styleProps}>
            <Flex gap={2} align={'center'}>
                <AppIcon height='50px' width='50px' />
                <Heading fontSize='xl'>{
                    firstLetterToUpper(path)
                }</Heading>
            </Flex>
            {comp.devMode ? <Text fontSize='sm'> Mock {account && compressAddress(account)} </Text> : <MetaConnect />}
        </Flex>
    )
}