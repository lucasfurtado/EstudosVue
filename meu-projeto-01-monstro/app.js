new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameOver: false,
        start: false,
        logs: [],
        logsOrdered:[],
        gameResult: '',
        won: false
    },
    methods:{
        attack : function(){

            var playerAttack = 0;
            var monsterAttack = 0;

            playerAttack = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

            var playerWillGetDisadvantage = Math.random() > 0.8 ? false : true;
            if(playerWillGetDisadvantage){
                monsterAttack = playerAttack + Math.floor(Math.random()*5);
            }
            else{
                monsterAttack = playerAttack - Math.floor(Math.random()*5);
            }

            this.playerHealth -= monsterAttack;
            if(this.playerHealth <=0){
                this.playerHealth = 0;
            }
            this.monsterHealth -= playerAttack;
            if(this.monsterHealth <=0){
                this.monsterHealth = 0;
            }

            this.generateAttackLog(playerAttack,monsterAttack);
            this.checkIfItsOver();
        },

        specialAttack : function(){
            var playerAttack = 0;
            var monsterAttack = 0;

            playerAttack = Math.floor(Math.random() * (10 - 5 + 1)) + 5 + 10;

            monsterAttack = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
            
            this.playerHealth -= monsterAttack;
            if(this.playerHealth <=0){
                this.playerHealth = 0;
            }
            this.monsterHealth -= playerAttack;
            if(this.monsterHealth <=0){
                this.monsterHealth = 0;
            }

            this.generateAttackLog(playerAttack,monsterAttack);
            this.checkIfItsOver();
        },

        healPlayer : function(){
            this.playerHealth += 5;
            monsterAttack = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
            this.playerHealth -= monsterAttack;
            this.generateHealLog(5,monsterAttack);
            this.checkIfItsOver();
        },

        generateAttackLog : function(playerAttack, monsterAttack){
            this.logs.unshift('Jogador atingiu o monstro com ' + playerAttack);
            this.logs.unshift('Monstro atingiu o jogador com ' + monsterAttack);
        },

        generateHealLog : function(healPoints,monsterAttack){
            this.logs.unshift('Jogador curou '+ healPoints);
            this.logs.unshift('Monstro atingiu o jogador com ' + monsterAttack);
        },

        checkIfItsOver : function() {
            if(this.playerHealth <= 0){
                this.gameOver = true;
                this.start = false;
                this.gameResult = 'Você perdeu :(';

            }
            else if(this.monsterHealth <= 0){
                this.gameOver = true;
                this.start = false;
                this.gameResult = 'Você ganhou! :)';
                this.won = true;
            }
        },

        resetGame : function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameOver = false;
            this.start = true;
            this.logs = [];
            this.won = false
        },

        giveUp : function(){
            this.gameOver = true;
            this.start = false;
            this.gameResult = 'Você perdeu :(';
        },
    },

    computed:{
        healthBarUpdate(){
            return {
                width: this.playerHealth+'%',
            }
        },

        healthBarMonsterUpdate(){
            return {
                width: this.monsterHealth+'%',
            }
        }
    }
})