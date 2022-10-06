//Date
export function hexToDate(hex: string) {
    let result = new Intl.DateTimeFormat('en-US',
        { month: '2-digit', day: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
        .format(parseInt(hex) * 1000)
    return (
        result
    )
}

//Text
export function firstLetterToUpper(text: string) {
    return text.charAt(1).toUpperCase() + text.slice(2)
}

//Address
export function compressAddress(address: string) {
    let compressedAddress = ''
    for (let i = 0; i < 5; i += 1) {
      compressedAddress += address[i]
    }
    compressedAddress += '...'
    for (let i = address.length - 1; i > address.length - 6; i -= 1) {
      compressedAddress += address[i]
    }
    return compressedAddress
  }
  