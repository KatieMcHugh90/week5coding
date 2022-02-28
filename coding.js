class Musician {
    constructor (name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    describe() {
        return `${this.name} plays ${this.instrument}.`;
    }
}

class Band {
    constructor (name) {
        this.name = name;
        this.band = [];
    }
     
    addBand(band) {
        if (band instanceof Band) {
            this.band.push(band);
        } else {
            throw new Error ('You can only add instance of Band. Argument is not a band: ${band}');
        
        }
     }


     describe() {
         return `${this.name} has ${this.bands.length} musicians.`;
     }
    }
     class Menu {
         constructor(){
             this.bands = [];
             this.selectedBand = null;
         }
         start() {
             let selection = this.showMainMenuOptions();
             while (selection != 0) {
                 switch (selection) {
                     case '1':
                         this.createBand();
                         break;
                         case '2' :
                             this.viewBand();
                             break;
                             case '3':
                                 this.deleteBand();
                                 break;
                                 case '4':
                                     this.displayBands();
                                     break;

                                     default:
                                         selection = 0;

                 }
                
        
                 selection = this.showMainMenuOptions();
             } 
             alert('Rock on!');
         }
         showMainMenuOptions() {
             return prompt(`
             0) exit
             1) create new band
             2) view band
             3) delete band
             4) display all bands
             `);
         }

             showBandMenuOptions(bandInfo) {
                 return prompt(`
                 0)back
                 1)create band
                 2)delete band
                 --------------------------
                 ${bandInfo}
                 `);

             }
         
         displayBands() {
             let bandString = '';
             for (let i = 0; i < this.bands.length; i++){
                 bandString += i + ')' + this.bands[i].name + '\n';
             }
             alert(bandString);
            }
         createBand() {
             let name = prompt('Enter name for new band');
             this.bands.push(new Band(name));
         }

             viewBand() {
                 let index = prompt('Enter the index of the band you wish to view:'); 
                 if (index > -1 && index < this.bands.length) {
                     this.selectedBand = this.bands[index];
                     let description = 'Band Name:' + this.selectedBand.name + '\n';
                     for (let i=0; i < this.selectedBand.musicians.length; i++) {
                         description += i + ')' + this.selectedBand.bsnds[i].name + ' - ' + this.selectedBand.band[i].bands + '\n';
                     }
                     let selection = this.showBandMenuOptions(description); 
                     switch (selection) {
                         case '1':
                             this.createBand();
                             break;
                             case '2':
                                 this.deleteBand();
                     }
                    }     
                 }
             }
     
     let menu = new Menu();
     menu.start();
        