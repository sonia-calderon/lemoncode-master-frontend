class SlotMachine {
    public coins: number = 0;

    randomBoolean (): boolean {
        return Math.random() >= 0.5;
    }

    incrementCoins (): void {
        this.coins++;
    }

    resetCoins (): void {
        this.coins = 0;
    }

    play(): void {        
        this.incrementCoins();

        let boolean01: boolean = this.randomBoolean();
        let boolean02: boolean = this.randomBoolean();;
        let boolean03: boolean = this.randomBoolean();;

        if(boolean01 && boolean02 && boolean03) {
            console.log(`Congratulations!!! You won ${this.coins} coins!!`)
            this.resetCoins();
        } else {
            console.log(`Good luck next time!!`)
        }
    }
};

const machine1 = new SlotMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play();