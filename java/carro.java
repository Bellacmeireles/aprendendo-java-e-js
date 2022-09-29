package java;
// Classe Conceitos + Exercício:

class Carro {

}

// Atributo Conceitos + Exercícios
// - como definir atributo:
class Moto {
    int portas;
    String cor;
    String modelo;
    int capacidadetanque;
}

// Método Conceitos + Exercícios
// THIS = tem a ver com o objeto, mostra oq tem a ver com o objeto e oq nao tem,
// diferencia o atributo para o paramentro do objeto.
class MotoBis {
    // int portas;
    String cor;
    String modelo;
    int capacidadeTanque;

    MotoBis() {

    }

    MotoBis(String cor, String modelo, int capacidadeTanque) {
        this.cor = cor;
        this.modelo = modelo;
        this.capacidadeTanque = capacidadeTanque;
    }

    void setorCor(String cor) {
        this.cor = cor;
    }

    String getCor() {
        return cor;
    }

    void setorModelo(String modelo) {
        this.modelo = modelo;
    }

    String getmodelo() {
        return modelo;
    }

    void setcapacidadeTanque(int capacidadeTanque) {
        this.capacidadeTanque = capacidadeTanque;
    }

    int getcapacidadeTanque() {
        return capacidadeTanque;
    }

    double totalValorTanque(double valorCombustivel) {
        return capacidadeTanque + valorCombustivel;
    }
}

// Objeto Conceitos + Exercícios
// Messagem Conceitos + Exercícios
class Combi {
    // int portas;
    String cor;
    String modelo;
    int capacidadeTanque;

    Combi() {

    }

    Combi(String cor, String modelo, int capacidadeTanque) {
        this.cor = cor;
        this.modelo = modelo;
        this.capacidadeTanque = capacidadeTanque;
    }

    void setCor(String cor) {
        this.cor = cor;
    }

    String getCor() {
        return cor;
    }

    void setModelo(String modelo) {
        this.modelo = modelo;
    }

    String getmodelo() {
        return modelo;
    }

    void setcapacidadeTanque(int capacidadeTanque) {
        this.capacidadeTanque = capacidadeTanque;
    }

    int getcapacidadeTanque() {
        return capacidadeTanque;
    }

    double totalValorTanque(double valorCombustivel) {
        return capacidadeTanque + valorCombustivel;
    }

    public static void main(String[] args) {
        Combi combi1 = new Combi();

        combi1.setCor("Azul");
        combi1.setModelo("Antiga mid'90");
        combi1.setcapacidadeTanque(59);

        System.out.println(combi1.getmodelo());
        System.out.println(combi1.getCor());
        System.out.println(combi1.getcapacidadeTanque());
        System.out.println(combi1.totalValorTanque(6.39));

        Combi combi2 = new Combi("cinza", "gol", 66);

        System.out.println(combi2.getmodelo());
        System.out.println(combi2.getCor());
        System.out.println(combi2.getcapacidadeTanque());
        System.out.println(combi2.totalValorTanque(6.46));

    }
}
