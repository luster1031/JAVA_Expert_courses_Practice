package prob1;
import java.util.Scanner;

public class Prob1 {
	public static void main(String[] args) {
		System.out.println("수를 입력하세요");
		Scanner scanner = new Scanner(System.in);
		if(scanner.nextInt()%3 == 0) {
			System.out.println("3의 배수입니다.");
		}else
			System.out.println("3의 배수가 아닙니다. ");
		scanner.close();
	}
}
