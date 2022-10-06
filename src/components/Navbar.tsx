import { Box, Flex, Text, IconButton, Collapse, Link, useDisclosure, Button, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReceiptIcon, PosIcon, SettingsIcon } from './';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar({ path }: any) {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box w='100%' h='max-content' position={'fixed'} zIndex={'2'} bottom='-1'>
      {/*Extra and Misc*/}
      <Collapse in={isOpen} animateOpacity >
        <Flex justify='center' p='3' bg='gray.800' borderTop='1px solid' borderColor='gray.500'>
          <Flex direction='row-reverse' w='100%' maxW='620px'>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Flex flex={1}>
              <Button as={Link} href='/' children='Info' />
            </Flex>
          </Flex>
        </Flex>
      </Collapse>
      {/*Navbar*/}
      <Flex p='0 1.2rem' borderRadius={!isOpen ? '1rem 1rem 0 0' : '0'} textAlign='center'
        bgGradient='linear(to-r, teal.500, green.500)' color='white' h='100px' justifyContent='center'>
        {/*Buttons*/}
        <Flex align='center' justify='space-between' maxW='620px' w='100%'>
          <Link href='#/settings' color={path === '/settings' && 'blue.300'} bg={`rgba(255, 255, 255, ${path === '/settings' ? '0.8' : '0.08'})`}
            p={2} pr={2} borderRadius='1rem'>
            <SettingsIcon h='6' w='6' />
            <Text fontSize='xs'>settings</Text>
          </Link>
          <Link href='#/pos' color={path === '/pos' && 'blue.300'} bg={`rgba(255, 255, 255, ${path === '/pos' ? '0.8' : '0.08'})`}
            p={2} pr={2} borderRadius='1rem'>
            <PosIcon h='6' w='6' />
            <Text fontSize='xs'>pos</Text>
          </Link>
          <Link href='#/receipts' color={path === '/receipts' && 'blue.300'} bg={`rgba(255, 255, 255, ${path === '/receipts' ? '0.8' : '0.08'})`}
            p={2} pr={2} borderRadius='1rem'>
            <ReceiptIcon h='6' w='6' />
            <Text fontSize='xs'>receipts</Text>
          </Link >
          <IconButton onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w='6' h='6' />}
            variant='ghost' color='white'
            _hover={{ backgroundColor: 'gray.600' }}
            _active={{ backgroundColor: 'gray.600' }}
            aria-label={'Toggle Navigation'} />
        </Flex>
      </Flex>
    </Box>
  );
}