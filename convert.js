var attendanceData=[
  {
    "name": "The Reading Nook",
    "location": "123 Book St, Bibliopolis",
    "isOpen": true,
    "numberOfSections": 2,
    "contact": null,
    "popularGenres": ["Fiction", "Mystery", "Sci-Fi", "Non-Fiction"],
    "test": {
    "test1": "Test 1",
    "test2": {
    "test3": "Test 3"
    }
    },
    "sections": [
    {
    "sectionName": "Section 1",
    "books": [
    {
    "title": "Journey to the Unknown",
    
    "author": "Alice Wonder",
    "price": 12.99,
    "isAvailable": true
    },
    {
    "title": "Mystery of the Ancient Map",
    "author": "Clive Cussler",
    "price": 15.50,
    "isAvailable": false
    }
    ]
    },
    {
    "sectionName": "Section 2",
    "books": [
    {
    "title": "The Reality of Myths",
    "author": "Helen Troy",
    "price": 18.25,
    "isAvailable": true
    }
    ]
    }
    ]
    
    },
]
const XLSX = require("xlsx");
 const workSheet = XLSX.utils.json_to_sheet(attendanceData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "attendance");
    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workBook,"newExcel.xlsx");