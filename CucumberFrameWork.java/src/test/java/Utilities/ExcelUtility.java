package Utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Calendar;

import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

@SuppressWarnings("deprecation")
public class ExcelUtility {
	private static XSSFWorkbook execlWoorkBook;
	private static XSSFSheet excelSheet;

	public static String getCellData(int RowNum, int columNum) throws IOException {

		FileInputStream excelfile = new FileInputStream(
				System.getProperty("user.dir") + "/src/main/resources/TestCase.xlsx");
		execlWoorkBook = new XSSFWorkbook(excelfile);
		excelSheet = execlWoorkBook.getSheetAt(0);
		DataFormatter dataformatter = new DataFormatter();
		dataformatter.formatCellValue(excelSheet.getRow(RowNum).getCell(columNum));
		
		return dataformatter.formatCellValue(excelSheet.getRow(RowNum).getCell(columNum));


	}

	public static String getCellDateFormate(int RowNum, int columNum) throws IOException {

		FileInputStream excelfile = new FileInputStream(
				System.getProperty("user.dir") + "/src/main/resources/testData.xlsx");
		execlWoorkBook = new XSSFWorkbook(excelfile);
		excelSheet = execlWoorkBook.getSheetAt(0);
		double data = excelSheet.getRow(RowNum).getCell(columNum).getNumericCellValue();

		Calendar cal = Calendar.getInstance();
		cal.setTime(HSSFDateUtil.getJavaDate(data));
		String cellText = (String.valueOf(cal.get(Calendar.YEAR)));
		cellText = cal.get(Calendar.DAY_OF_MONTH) + "/" + (cal.get(Calendar.MONTH)+ 1 )+ "/" + cellText;

		return cellText;

	}
	
}
