import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { setAlertWarning } from '../reducers';
import { compressAddress } from '../utils/formats';

const MetaConnect = () => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    onError(error) {
      dispatch(setAlertWarning(error.message))
    }
  })
  const { disconnect } = useDisconnect()

  return (
    <Box>
      <Stack spacing={2}>
        {address &&
          <HStack>
            <Text fontSize='sm'>{compressAddress(address)} </Text>
            <Button size='sm' onClick={() => disconnect()} >Logout</Button>
          </HStack>}
        {!address && <Button size='sm' onClick={() => connect()}>Connect Wallet</Button>}
      </Stack>
    </Box >
  )
};

export default MetaConnect;