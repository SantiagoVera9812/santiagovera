package com.taller;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class LeerArchivo {
    public static List<Integer> readAndProcessFile(String rutaArchivo) throws IOException {


        List<Integer> numeros = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(rutaArchivo))) {
            String linea;

            
            while ((linea = br.readLine()) != null) {
                
                int numero = Integer.parseInt(linea.trim());
                numeros.add(numero);

            }
        } catch (NumberFormatException e) {
            System.err.println("Error al convertir a número: " + e.getMessage());
            throw e;
        }

        return numeros;
    }
    
}
