function main() {
    let numero1a9 = 1
    let numero6a7 = 7

    while (numero1a9 <= 9) {
        console.log(`I=${numero1a9} J=${numero6a7}`)
        numero6a7--
        console.log(`I=${numero1a9} J=${numero6a7}`)
        numero6a7--
        console.log(`I=${numero1a9} J=${numero6a7}`)
        
        numero1a9 += 2
        numero6a7 += 4
    }
}

main()
