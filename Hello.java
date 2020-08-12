import java.io.*;
import java.util.*;
class Hello
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter log = new BufferedWriter(new OutputStreamWriter(System.out));
        log.write("Hello");
        log.flush();
    }
}