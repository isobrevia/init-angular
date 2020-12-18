class Coche{
    constructor(modelo, velodidad, antiguedad){
        this.modelo = modelo;
        this.velodidad = velodidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velodidad += 1;
    };

    reducirVelocidad(){
        this.velodidad -= 1;
    }
}