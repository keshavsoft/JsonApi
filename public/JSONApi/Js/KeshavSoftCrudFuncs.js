jVarGlobalHBSData = {
    KTableData: "",
    KTableDataSimple: "",
    KTableWithCardAndSearchRow: "",
    Table: {
        KTableWithCardAndSearchRow: "",
        Footer: {
            CreateNew: {
                KTfooterCreateNewRow: ""
            }
        },
        Search: {
            KSearchRow: ""
        },
        Body: {
            Row: {
                KTbodyRowOptions: ""
            }
        },
        Head: {
            KThead: ""
        }
    },
    TableForPrint: {
        KTableWithCardAndSearchRowForPrint: "",
        Body: {
            KTBody: ""
        },
        Head: {
            KTHead: ""
        },
        Footer: {
            KTFoot: ""
        }
    },
    Vertical: {
        KVertical: ""
    },
    Global: {
        Common: ""
    },
    BreadCrump: {
        Show: ""
    }
};

let jVarGlobalhelpersObject = {
    jFRetColumnValueWithDataAttribute: ({ inJVarColumnsArray, inJVarDataArray, inJVarColumnToFind }) => {
        let jVarLocalColumnIndex;
        let jVarLocalPKValue = "";

        inJVarColumnsArray.forEach((jVarLoopItem, jVarLoopIndex) => {
            if (jVarLoopItem.DataAttribute === inJVarColumnToFind) {
                jVarLocalColumnIndex = jVarLoopIndex;
            }
        });

        if (jVarLocalColumnIndex !== undefined) {
            jVarLocalPKValue = inJVarDataArray[jVarLocalColumnIndex].CellValue;
        }

        return jVarLocalPKValue;
    },
    jFRetTextAlign: ({ inJVarColumnsArray, inJVarIndex }) => {
        if (inJVarColumnsArray[inJVarIndex] != undefined) {
            return inJVarColumnsArray[inJVarIndex].TextAlign;
        } else {
            return "";
        }
    },
};

let HandleBarsHelpers = () => {
    Handlebars.registerHelper('NumToWord', function (inputNumber) {
        return jVarGlobalUtilClass.FloatToWords(inputNumber);
    });

    Handlebars.registerHelper('DateFromyyyyMMddToddMMyyyy', function (inDate) {
        let LocalDateTransformed = "";
        if (inDate !== undefined) {
            let yyyy = inDate.substring(0, 4);
            let MM = inDate.substring(5, 7);
            let dd = inDate.substring(8, 10);

            LocalDateTransformed = `${dd}-${MM}-${yyyy}`;
        };

        return LocalDateTransformed;
    });

    Handlebars.registerHelper('ForSNo', function (item) {
        return item + 1;
    });

    Handlebars.registerHelper('array_value_indexret', function (ColumnsArray, ValueToFind, DataArray, options) {

        return jVarGlobalhelpersObject.jFRetColumnValueWithDataAttribute({
            inJVarColumnsArray: ColumnsArray,
            inJVarDataArray: DataArray,
            inJVarColumnToFind: ValueToFind
        });
    })

    Handlebars.registerHelper('array_index_TextAlign', function (arr, index, options) {
        return jVarGlobalhelpersObject.jFRetTextAlign({ inJVarColumnsArray: arr, inJVarIndex: index });
    })

    Handlebars.registerHelper('switch', function (value, options) {
        this.switch_value = value;
        this.switch_break = false;
        return options.fn(this);
    });

    Handlebars.registerHelper('case', function (value, options) {
        if (value == this.switch_value) {
            this.switch_break = true;
            return options.fn(this);
        };
    });

    Handlebars.registerHelper('default', function (value, options) {
        if (this.switch_break == false) {
            return value;
        }
    });

    Handlebars.registerHelper('TableColumnWidth', function (inColumnsarray, inColumnIndex) {
        let LocalShowTableColumns = _.filter(inColumnsarray, { ShowInTable: true });

        LocalReturnValue = _.map(LocalShowTableColumns, (LoopItem) => {
            return parseFloat(LoopItem.Widths.px);
        });

        let SumValue = _.sum(LocalReturnValue);
        SumValue += 100;
        let PercentageValue = (inColumnsarray[inColumnIndex].Widths.px / SumValue) * 100;

        return PercentageValue;
    });

    Handlebars.registerHelper('array_index_Editable', function (inEditableValue, options) {
        if (inEditableValue === "false") {
            return false;
        } else {
            return "True";
        }
    })

    Handlebars.registerHelper('Table_KLevel', function (inKLevel, options) {
        if (inKLevel === "" || inKLevel === undefined) {
            return "0";
        } else {
            return inKLevel;
        }
    })

    Handlebars.registerHelper('array_index_sno', function (index, options) {
        return index + 1;
    });

    Handlebars.registerHelper('ShowInTable', function (inarray, inColumnIndex) {
        if (inarray[inColumnIndex] !== undefined) {
            let arr = inarray[inColumnIndex]
            if (arr !== undefined) {

                return arr.ShowInTable;

            } else {
                return [];
            }
        } else {
            return [];
        }
    });

    Handlebars.registerHelper('ShowInIndianDateFormat', (value, options) => {
        if (value !== undefined) {
            return jVarGlobalUtilClass.addThousand(parseFloat(value).toFixed(2), 2);
        } else {
            return "";
        }
    });

    Handlebars.registerHelper('ShowInIndianDateFormatPositiveOnly', (value, options) => {
        if (value > 0) {
            return jVarGlobalUtilClass.addThousand(parseFloat(value).toFixed(2), 2);
        } else {
            return "";
        };
    });

    Handlebars.registerHelper('array_index_TextAlign', function (arr, index, options) {
        return jVarGlobalhelpersObject.jFRetTextAlign({ inJVarColumnsArray: arr, inJVarIndex: index });
    })

    Handlebars.registerHelper('TableColumnIsInput', function (inarray, inColumnIndex) {
        if (inarray[inColumnIndex] !== undefined) {
            let arr = inarray[inColumnIndex]

            if (arr !== undefined) {
                return arr.DisplayType.IsInput;
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    Handlebars.registerHelper('TableColumnIsSelect', function (inarray, inColumnIndex) {
        if (inarray[inColumnIndex] !== undefined) {
            let arr = inarray[inColumnIndex]

            if (arr !== undefined) {
                return arr.IsSelect;
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    Handlebars.registerHelper('TableColumnHtmlAttributesList', function (inarray, inColumnIndex) {
        if (inarray[inColumnIndex] !== undefined) {
            let arr = inarray[inColumnIndex]

            if (arr !== undefined) {
                return arr.HtmlAttributes.list;
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    Handlebars.registerHelper('TableColumnHtmlAttributesListValue', function (inarray, inColumnIndex, inCellValue) {
        let jVarLocalHtmlDataList = document.getElementById("DataListsID");
        let jVarLocalDataListNeeded;
        let JVarLocalDataListValue;
        let jVarLocalDataListOptions;
        let jVarIndexNeeded = 0;

        if (inarray[inColumnIndex] !== undefined) {
            let arr = inarray[inColumnIndex]

            if (arr !== undefined) {
                if (arr.HtmlAttributes.list !== "") {
                    jVarLocalDataListNeeded = jVarLocalHtmlDataList.querySelector(`#${arr.HtmlAttributes.list}`);
                    jVarLocalDataListOptions = jVarLocalDataListNeeded.options;

                    for (var i = 0; i < jVarLocalDataListOptions.length; i++) {
                        if (parseInt(jVarLocalDataListOptions[i].text) === inCellValue) {
                            jVarIndexNeeded = i;
                        }
                    };

                    JVarLocalDataListValue = jVarLocalDataListNeeded.options[jVarIndexNeeded].value;
                };

                return JVarLocalDataListValue;
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    Handlebars.registerHelper('SubTableCheck', function (invalue) {
        return Array.isArray(invalue.CellValue);
    });

    Handlebars.registerHelper('IsIndianDateFormat', function (inarray, inColumnIndex) {
        if (inarray[inColumnIndex] !== undefined) {
            let arr = inarray[inColumnIndex]
            if (arr !== undefined) {
                return arr.DisplayType.IsIndianFormat;
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    Handlebars.registerHelper('TableColumnTotal', (inColumnIndex, inDataArray) => {
        LocalReturnValue = _.map(inDataArray, (LoopItem) => {
            let LocalShowTotalData = LoopItem.DisplayText[inColumnIndex].CellValue;

            if (LocalShowTotalData != undefined) {
                return parseFloat(LocalShowTotalData.toString().split(",").join(""));
            };
        })

        return _.sum(LocalReturnValue);
    });

    Handlebars.registerHelper('TableColumnBalance', (inColumnIndex, inDataArray, inColumnsArray) => {
        let LocalTotalsValue;
        let LocalTotalObject = {};
        let LocalReturnValue;
        let LocalClientEval;
        let LocalLoopBalanceValue;

        _.forEach(inColumnsArray, (LoopItem, LoopColumnIndex) => {
            LocalTotalsValue = _.map(inDataArray, (LoopItem) => {
                let LocalShowTotalData = LoopItem.DisplayText[LoopColumnIndex].CellValue;

                if (LocalShowTotalData != undefined) {
                    return parseFloat(LocalShowTotalData.toString().split(",").join(""));
                };
            });

            LocalTotalObject[LoopItem.DataAttribute] = _.sum(LocalTotalsValue);
        });

        LocalReturnValue = _.map(inColumnsArray, (LoopItemColumn) => {
            LocalClientEval = LoopItemColumn.Footer.Show.Balance.Columns;

            LocalLoopBalanceValue = KeshavSoftCrud.ForEval.FromObject({ injVarClientEval: LocalClientEval, inDataAsObject: LocalTotalObject });
            return LocalLoopBalanceValue;
        });

        return LocalReturnValue[inColumnIndex];
    });

    Handlebars.registerHelper('SubTableCheckExtraRow', function (invalue) {
        return typeof invalue === "object";
    });

    Handlebars.registerHelper('ShowTableColumnsCount', function (inColumnsArray) {
        return _.size(inColumnsArray);
    });


    Handlebars.registerHelper('SubTableRowCount', function (inarray) {
        return inarray.length;
    });

    Handlebars.registerHelper('JSON2string', function (object) {
        return JSON.stringify(object);
    });


    Handlebars.registerHelper('ColumnCount', function (inColumnIndex, inData, options) {
        let LocalReturnValue;

        let LocalDataArray = inData.map(LoopItem => {
            if (LoopItem.DisplayText[inColumnIndex].CellValue === undefined) {

                return 0;
            } else {
                return parseFloat(LoopItem.DisplayText[inColumnIndex].CellValue);
            }
        });

        LocalReturnValue = LocalDataArray.reduce((a, b) => a + b, 0)

        return LocalReturnValue;
    });
};

class jVarGlobalUtilClass {
    static IndianFormat = (x) => {
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);

        if (otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

        return res;
    };

    static addThousand = (input, decimalpoints) => {
        var output = input;
        var zerovalue = "0";

        if (parseFloat(input)) {
            input = new String(input); // so you can perform string operations

            if (input.indexOf(".") === -1) {
                //if no decimal is present in input

                output = this.IndianFormat(input.trim());

                if (decimalpoints > 0) {
                    //if decimalpoints are needed then add that many zeros with . to the output
                    output += "." + zerovalue.repeat(decimalpoints);
                }
            }
            else {
                var parts = input.split("."); // remove the decimal part
                //convert the integer to thousands value
                parts[0] = this.IndianFormat(parts[0]);
                //now check for the decimal portion length
                if (parts[1].trim().length < decimalpoints) {
                    //if decimal portion length is less then needed of decimalpoints
                    //then insert the last need zeros as below
                    parts[1] = parts[1].trim() + zerovalue.repeat(decimalpoints - parts[1].trim().length);
                }
                else {
                    //if decimal portion needed is less then available
                    //then trim the content needed
                    parts[1] = parts[1].substring(0, decimalpoints);
                }
                //now join then split parts
                output = parts.join(".");
            }

        }
        return output;
    }

    static FloatToWords = (inputNumber) => {
        var str = new String(inputNumber);
        let LocalSplitDecimal = str.split(".");

        let LocalPaise = "";

        var LocalRupees = this.IntToWords(parseInt(LocalSplitDecimal[0]));

        if (LocalSplitDecimal.length > 1) {
            let LocalPaiseNumber = parseInt(LocalSplitDecimal[1]);

            LocalPaiseNumber = parseInt(LocalSplitDecimal[1]) * 10;

            LocalPaise = this.IntToWords(LocalPaiseNumber);
        };

        if (LocalPaise === "") {
            return `${LocalRupees} Rupees only.`;
        } else {
            return `${LocalRupees} Rupees and ${LocalPaise} paise only.`;
        };
    };

    static FloatToWords1 = (inputNumber) => {
        var str = new String(inputNumber);

        //var splt = str.split("");
        var splt = str.split(".")[0].split("");
        let LocalDecimalInWords = "";

        if (str.split(".").length > 1) {
            let LocalDecimalPart = str.split(".")[1];
            let LocalDecimalNumber = parseInt(LocalDecimalPart);

            if (LocalDecimalPart.length === 1) {
                LocalDecimalNumber = parseInt(LocalDecimalPart) * 10;
            };

            LocalDecimalInWords = this.FloatToWords(LocalDecimalNumber);
        };

        var rev = splt.reverse();
        var once = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
        var twos = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
        var tens = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

        let numLength = rev.length;
        var word = new Array();
        var j = 0;
        let i;

        for (i = 0; i < numLength; i++) {
            switch (i) {

                case 0:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                        word[j] = '';
                    }
                    else {
                        word[j] = '' + once[rev[i]];
                    }
                    word[j] = word[j];
                    break;

                case 1:
                    aboveTens();
                    break;

                case 2:
                    if (rev[i] == 0) {
                        word[j] = '';
                    }
                    else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                        word[j] = once[rev[i]] + " Hundred ";
                    }
                    else {
                        word[j] = once[rev[i]] + " Hundred and";
                    }
                    break;

                case 3:
                    if (rev[i] == 0 || rev[i + 1] == 1) {
                        word[j] = '';
                    }
                    else {
                        word[j] = once[rev[i]];
                    }
                    if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                        word[j] = word[j] + " Thousand";
                    }
                    break;


                case 4:
                    aboveTens();
                    break;

                case 5:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                        word[j] = '';
                    }
                    else {
                        word[j] = once[rev[i]];
                    }
                    if (rev[i + 1] !== '0' || rev[i] > '0') {
                        word[j] = word[j] + " Lakh";
                    }

                    break;

                case 6:
                    aboveTens();
                    break;

                case 7:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                        word[j] = '';
                    }
                    else {
                        word[j] = once[rev[i]];
                    }
                    if (rev[i + 1] !== '0' || rev[i] > '0') {
                        word[j] = word[j] + " Crore";
                    }
                    break;

                case 8:
                    aboveTens();
                    break;


                default: break;
            }
            j++;
        };

        function aboveTens() {
            if (rev[i] == 0) { word[j] = ''; }
            else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
            else { word[j] = tens[rev[i]]; }
        }

        word.reverse();
        var finalOutput = '';
        for (i = 0; i < numLength; i++) {
            finalOutput = finalOutput + word[i];
        };

        return `${finalOutput} Rupees only.`;
    };

    static IntToWords = (inputNumber) => {
        var str = new String(inputNumber);

        var splt = str.split("");

        var rev = splt.reverse();
        var once = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
        var twos = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
        var tens = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

        let numLength = rev.length;
        var word = new Array();
        var j = 0;
        let i;

        for (i = 0; i < numLength; i++) {
            switch (i) {

                case 0:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                        word[j] = '';
                    }
                    else {
                        word[j] = '' + once[rev[i]];
                    }
                    word[j] = word[j];
                    break;

                case 1:
                    aboveTens();
                    break;

                case 2:
                    if (rev[i] == 0) {
                        word[j] = '';
                    }
                    else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                        word[j] = once[rev[i]] + " Hundred ";
                    }
                    else {
                        word[j] = once[rev[i]] + " Hundred and";
                    }
                    break;

                case 3:
                    if (rev[i] == 0 || rev[i + 1] == 1) {
                        word[j] = '';
                    }
                    else {
                        word[j] = once[rev[i]];
                    }
                    if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                        word[j] = word[j] + " Thousand";
                    }
                    break;


                case 4:
                    aboveTens();
                    break;

                case 5:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                        word[j] = '';
                    }
                    else {
                        word[j] = once[rev[i]];
                    }
                    if (rev[i + 1] !== '0' || rev[i] > '0') {
                        word[j] = word[j] + " Lakh";
                    }

                    break;

                case 6:
                    aboveTens();
                    break;

                case 7:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                        word[j] = '';
                    }
                    else {
                        word[j] = once[rev[i]];
                    }
                    if (rev[i + 1] !== '0' || rev[i] > '0') {
                        word[j] = word[j] + " Crore";
                    }
                    break;

                case 8:
                    aboveTens();
                    break;


                default: break;
            }
            j++;
        };

        function aboveTens() {
            if (rev[i] == 0) { word[j] = ''; }
            else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
            else { word[j] = tens[rev[i]]; }
        }

        word.reverse();
        var finalOutput = '';
        for (i = 0; i < numLength; i++) {
            finalOutput = finalOutput + word[i];
        };

        return finalOutput;
    };
};

let jVarHbsTemplatesFill = () => {
    let jVarLocalHbsTemplates = document.querySelectorAll('script[KS="KeshavSoft"]');

    jVarLocalHbsTemplates.forEach(element => {
        Handlebars.registerPartial(element.id, element.innerText);
    });
};

let jVarGlobalTableObjects = {
    TableRowObject:
    {
        RowClass: "",
        DisplayText: [],
        TableKType: "",
        TableKJsonFileName: "",
        DataAttributes: {
            TableKType: "",
            TableKJsonFileName: ""
        }
    },
    TableDataObject: {
        CellObjectDefault: {
            CellValue: "LoopItemCellItems",
            CellClass: "",
            ControlClass: "",
            ControlType: "",
            CellButtonClick: "",
            BorderWidths: {},
            Span: {
                Row: "",
                Col: ""
            },
            Font: {
                Size: ""
            }
        },
        BorderWidthsTop: {
            Top: 1
        },
        BorderWidths1Top2Bottom: {
            Top: 1,
            Bottom: 2
        }
    },
    TableInfo: {
        TableInfoServerSide: {
            TransformToUi: true
        },
        SearchControl: [],
        TableBody: {
            FooterType: {
                ShowTotals: false,
                Search: {
                    ShowTotals: true
                }
            }
        },
        TableRowOptions: {
            PrintToPrinter: {
                Double: false,
                Barcode: false
            },
            DropDown: "",
            KData: [
                {
                    DisplayName: "Edit",
                    OnClickFunc: ""
                },
                {
                    DisplayName: "Delete",
                    OnClickFunc: ""
                },
                {
                    DisplayName: "InvGrid",
                    OnClickFunc: ""
                },
                {
                    DisplayName: "Design",
                    OnClickFunc: ""
                },
                {
                    DisplayName: "Show",
                    OnClickFunc: ""
                },
                {
                    DisplayName: "Update",
                    OnClickFunc: ""
                }
            ],
            Onclick: "TestingClick",
            Copy: {
                KTF: false
            },
            ShowinTable: {
                KTF: false
            },
            Delete: {
                Simple: false
            },
            Edit: {
                RowEdit: false,
                SubTableRowEdit: false
            },
            CreateNew: {
                RowCreateNew: false,
                NewWindow: {
                    ApiToServer: {
                        KTF: false
                    }
                }
            },
            Show: {
                Rowshow: false,
                RowDetails: false,
                KeyAsTree: false
            },
            DefaultFocus: {
                DataAttribute: ""
            },
            InvGrid: {
                RowInvGrid: false
            },
            BarcodePrint: {
                SVJP: false,
                SKML: false
            },
            BillSave: {
                Edit: false
            },
            PopUp: {
                Rowshow: false
            },
            Design: false
        },
        kPK: "pk",
        kDetails: "",
        kUserName: "",
        TableId: "KTableId",
        ShowFooter: false,
        BackGroundColor: "#ffffff",
        ParentClass: "col-12",
        HeadRowSearch: false,
        PopUp: "",
        DisplayName: "",
        ParentClasses: {
            Parent1Class: "col-md-8",
            Parent2Class: "col-md-4",
            Parent3Class: "col-md-12",
            Table: {
                CardClass: "CardClass"
            }
        },
        SearchRowArray: {
            Label: {
                KTF: false,
                DisplayObject: {
                    DisplayText: "KeshavSoft",
                    ColClass: "md-6 col-sm-12 col-12"
                }
            },
            Search: {
                KTF: false,
                DisplayObject: {
                    DisplayText: "Search",
                    ColClass: "md-4 col-sm-8 col-12"
                }
            },
            SearchWithEnter: {
                KTF: false,
                DisplayObject: {
                    DisplayText: "SearchWithEnter",
                    ColClass: "md-2 col-sm-4 col-12"
                }
            },
            Button: {
                PrintToPrinter: {
                    Double: false,
                    Preview: {
                        KTF: false,
                        DisplayObject: {
                            ColClass: "md-1"
                        }
                    }
                },
                Footer: {
                    WithApi: {
                        KTF: false,
                        DisplayObject: {
                            ColClass: "md-1",
                            SvgPlus: false,
                            SvgPlusLarge: false,
                            Table: false
                        }
                    }
                },
                Scrollable: {
                    KTF: false,
                    DisplayObject: {
                        ColClass: "md-1"
                    }
                },
                NewWindow: {
                    KTF: false,
                    DisplayObject: {
                        ColClass: "md-1",
                        SvgPlus: false,
                        SvgPlusLarge: false,
                        NewWindow: false,
                        Table: false
                    }
                },
                PopUp: {
                    KTF: false,
                    DisplayObject: {
                        ColClass: "md-1",
                        SvgPlus: false,
                        SvgPlusLarge: false,
                        NewWindow: false,
                        Table: false,
                        Chat: false
                    }
                },
                FromHtml: {
                    KTF: false,
                    DisplayObject: {
                        ColClass: "md-1",
                        SvgPlus: false,
                        SvgPlusLarge: false,
                        NewWindow: false,
                        Table: false,
                        Chat: false
                    }
                }

            },
            CreativeTim: {
                SearchWithEnter: {
                    KTF: false,
                    DisplayObject: {
                        DisplayText: "SearchWithEnter",
                        ColClass: "md-2 col-sm-4 col-12"
                    }
                }
            }
        },
        Vertical: {
            Footer: {
                Update: false,
                SaveType: {
                    Post: false,
                    Show: false,
                    Save: false,
                    LedgerShow: false
                }
            },
            VerticalCreate: {
                save: false,
                saveNew: false,
                saveNewReturnData: false,
                Edit: false,
                Update: false,
                UpdateNew: false,
                saveFromKeyAsTree: false,
                ForSubTable: false,
                Save: {
                    Transactions: false,
                    Head: false
                },
                Show: {
                    Masters: false,
                    Transactions: false,
                    Reports: false
                }
            }
        },
        DataAttributes: {
            JsonConfig: "",
            ItemConfig: "",
            PK: "",
            localstorageid: "",
            localstoragearrayindex: 0,
            InsertKey: ""
        },
        BreadCrump: [
            {
                DisplayText: "home"
            }
        ],
        FooterType: {
            ShowBalance: false,
            CreateNew: false,
            CreateNewRow: {
                Style: "",
                Show: false
            },
            SaveType: {
                Save: false
            },
            ShowTotals: false
        },
        DataAttributesFromTableInfo: true,
        DataAttributesFromTableDataRow: false
    },
    TableColumn: {
        IsTextArea: false,
        TableClasses: {
            ColumnClass: ""
        },
        DisplayOrder: {
            inTable: 0
        },
        DisplayName: "DisplayName",
        DataAttribute: "DataAttribute",
        Head: {
            Bs5UpArrow: false,
            Bs5DownArrow: false,
        },
        ServerSide: {

        },
        Footer: {
            Show: {
                Balance: {
                    ShowTF: false,
                    Columns: ""
                }
            }
        },
        HtmlAttributes: {
            KTF: false,
            list: ""
        },
        KDataAttributes: {
            onkeypress: false,
            EnterOnClient: false,
            ClientEval: "",
            CustomDataList: false
        },
        EnterToServer: false,
        IsSelect: false,
        SaveOnEnter: false,
        CreateNew: true,
        Insert: true,
        isDate: false,
        isDropdown: false,
        isToggle: false,
        ShowInTable: false,
        LocalStoageRefKey: "",
        TextAlign: "left",
        ShowTotal: false,
        ShowBalanceTF: false,
        DefaultValue: "",
        ViewType: 0,
        Buttons: {
            MssqlSave: false
        },
        Widths: {
            px: 0
        },
        ParentClasses: {
            Parent1Class: "col-md-8",
            Parent2Class: "col-md-4",
            Parent3Class: "col-md-12",
            InputClass: "form-control"
        },
        DisplayType: {
            IsIndianFormat: false,
            IsInput: false
        },
        KDataset: {
            HTMLControlType: "",
            Min: "",
            Max: "",
            Step: "",
            SaveCheck: {
                ClientSide: false,
                Validate: false,
                Type: "",
                Masters: {
                    CheckKey: "",
                    CheckColumnName: ""
                }
            },

        },
        KDatasetStuff: {
            Validate: false,
            Type: "",
            DataListReverse: false,
            LocalStorage: {
                PullKey: "",
                FilterKeys: "",
                ReturnKeys: "",
                TargetColumnDataAttribute: "",
                TargetKey: ""
            }
        }
    },
    GlobalRowObject: {
        HTMLControlType: "", KData: {
            TableColumns: [],
            TableData: [],
            TableInfo: {}
        }
    }
};

class TableSearchClass {
    static FilterBodyData = ({ inData, inValueToSearch }) => {
        let LocalRowFilterArray = [];
        let LocalCellFilterArray = [];
        let LocalFooterRows = [];
        let LocalCellValue;

        LocalRowFilterArray = _.filter(inData, (LoopItemRow) => {
            LocalCellFilterArray = _.filter(LoopItemRow.DisplayText, (LoopItemRowCells) => {
                if (LoopItemRowCells.hasOwnProperty("CellValue")) {
                    LocalCellValue = LoopItemRowCells.CellValue;

                    if (LocalCellValue !== null || LocalCellValue !== undefined) {
                        switch (typeof LocalCellValue) {
                            case "string":
                                return LocalCellValue.includes(inValueToSearch);
                            case "number":
                                return LocalCellValue.toString().includes(inValueToSearch);

                            default:
                                break;
                        };
                    };

                    return false;
                } else {
                    return false;
                }
            });

            if (LocalCellFilterArray.length > 0) {
                return true
            } else {
                return false;
            };
        });

        return LocalRowFilterArray;
    }
};

class KeshavSoftCrud {
    static BuildFromArrayWithColumns = {
        StartFunc: (inDataArray) => {
            let LocalLoopObject = {};
            let LocalReturnArray = [];

            try {
                LocalReturnArray = inDataArray.map((LoopItem) => {
                    switch (LoopItem.HTMLControlType) {
                        case "Breadcrumb": case "KAlert":
                            LocalLoopObject = LoopItem;
                            break;

                        default:
                            LocalLoopObject = JSON.parse(JSON.stringify(LoopItem));
                            LocalLoopObject.KData = this.BuildFromArrayWithColumns.CommonFuncs.PrepareTableDataMain({ KData: LoopItem.KData });

                            break;
                    }

                    return LocalLoopObject;
                });

            } catch (error) {
                console.log("error : ", error);
            };

            return LocalReturnArray;
        },
        CommonFuncs: {
            PrepareTableRowObject: {
                General: ({ inDataFirstRow, inItemRow }) => {
                    let LocalRowObject = {};
                    let LocalCellObject = {};

                    LocalRowObject = _.cloneDeep(jVarGlobalTableObjects.TableRowObject);
                    LocalRowObject.DisplayText = [];

                    Object.entries(inDataFirstRow).forEach(
                        ([key, value]) => {
                            LocalCellObject = _.cloneDeep(jVarGlobalTableObjects.TableDataObject.CellObjectDefault);

                            LocalCellObject.CellValue = inItemRow[key];
                            LocalRowObject.DisplayText.push(LocalCellObject);
                        }
                    );

                    return LocalRowObject;
                }
            },
            PrepareTableDataMain: ({ KData }) => {
                let LocalObject = {};

                LocalObject.TableData = _.map(KData.TableData, (LoopItemRow) => {
                    return this.BuildFromArrayWithColumns.CommonFuncs.PrepareTableRowObject.General({
                        inDataFirstRow: KData.TableData[0],
                        inItemRow: LoopItemRow
                    });
                });

                LocalObject.TableColumns = this.BuildFromArrayWithColumns.CommonFuncs.PrepareTableColumns({ inDataFirstRow: KData.TableData[0] });
                LocalObject.TableInfo = this.BuildFromArrayWithColumns.CommonFuncs.PrepareTableInfo();

                return LocalObject;
            },
            PrepareTableColumns: ({ inDataFirstRow }) => {
                let LocalColumnObject;
                let LocalReturnArray = [];

                Object.entries(inDataFirstRow).forEach(
                    ([key, value]) => {
                        LocalColumnObject = _.cloneDeep(jVarGlobalTableObjects.TableColumn);
                        LocalColumnObject.DataAttribute = key;
                        LocalColumnObject.DisplayName = key;
                        LocalColumnObject.ShowInTable = true;
                        LocalReturnArray.push(LocalColumnObject);
                    }
                );

                return LocalReturnArray;

                // return _.map(inColumns, (LoopItem) => {
                //     LocalColumnObject = _.cloneDeep(jVarGlobalTableObjects.TableColumn);

                //     this.SwapData.CallLoopStart({ inData: LocalColumnObject, inJson: LoopItem });
                //     return LocalColumnObject;
                // });
            },
            PrepareTableInfo: () => {
                let LocalTableInfo;

                LocalTableInfo = _.cloneDeep(jVarGlobalTableObjects.TableInfo);

                //   this.SwapData.CallLoopStart({ inData: LocalTableInfo, inJson: inTableInfo });

                return LocalTableInfo;
            }
        }
    };

    static BuildFromArray = (inDataArray) => {
        let LocalLoopObject = {};
        let LocalReturnArray = [];

        try {
            LocalReturnArray = inDataArray.map((LoopItem) => {
                switch (LoopItem.HTMLControlType) {
                    case "Breadcrumb": case "KAlert":
                        LocalLoopObject = LoopItem;
                        break;

                    default:
                        LocalLoopObject = JSON.parse(JSON.stringify(LoopItem));
                        LocalLoopObject.KData = this.PrepareTableMainFuncs.PrepareTableDataMain({ KData: LoopItem.KData });

                        break;
                }

                return LocalLoopObject;
            });

        } catch (error) {
            console.log("error : ", error);
        };

        return LocalReturnArray;
    };

    static PrepareTableMainFuncs = {
        FromArray: ({ inColumns = [], inData = [] }) => {
            let LocalObject = {};
            // here keys extracted from first row (assume all rows will have same keys)
            LocalObject.TableColumns = this.PrepareTableData.PrepareColumns.FromArray({ inColumns });

            LocalObject.TableData = _.map(inData, (LoopItemRow) => {
                return this.PrepareTableData.PrepareTableRowObject.General({ inColumns: LocalObject.TableColumns, inItemRow: LoopItemRow });
            });

            LocalObject.TableFooterData = jVarGlobalDataObject.PrepareFooterRows.PrepareFooterDataRet({ inTotalColumnInfoArray: LocalObject.TableColumns, inData: LocalObject.TableData });

            LocalObject.TableInfo = _.cloneDeep(jVarGlobalTableObjects.TableInfo);

            return { HTMLControlType: "Table", KData: LocalObject };
        },
        PrepareTableDataMain1: ({ KData }) => {
            let LocalObject = {};

            LocalObject.TableData = _.map(KData.TableData, LoopItemRow => {
                return this.PrepareTableData.PrepareTableRowObject.General({
                    inColumns: KData.TableColumns,
                    inItemRow: LoopItemRow
                });
            });

            LocalObject.TableColumns = this.PrepareTableMainFuncs.KDataContent.TableColumns({ inColumns: KData.TableColumns });
            LocalObject.TableInfo = this.PrepareTableMainFuncs.KDataContent.TableInfo({ inTableInfo: KData.TableInfo });

            return LocalObject;
        },
        PrepareTableDataMain: ({ KData }) => {
            let LocalObject = {};

            LocalObject.TableData = this.PrepareTableMainFuncs.KDataContent.PrepareTableDataOnly({
                inTableData: KData.TableData,
                inTableColumns: KData.TableColumns
            });
            LocalObject.TableColumns = this.PrepareTableMainFuncs.KDataContent.TableColumns({ inColumns: KData.TableColumns });
            LocalObject.TableInfo = this.PrepareTableMainFuncs.KDataContent.TableInfo({ inTableInfo: KData.TableInfo });

            return LocalObject;
        },
        KDataContent: {
            PrepareTableDataOnly: ({ inTableData, inTableColumns }) => {
                let LocalReturnData = {};

                LocalReturnData = _.map(inTableData, LoopItemRow => {
                    return this.PrepareTableData.PrepareTableRowObject.General({
                        inColumns: inTableColumns,
                        inItemRow: LoopItemRow
                    });
                });

                return LocalReturnData;
            },
            TableColumns: ({ inColumns }) => {
                let LocalColumnObject;

                return _.map(inColumns, (LoopItem) => {
                    LocalColumnObject = _.cloneDeep(jVarGlobalTableObjects.TableColumn);

                    this.SwapData.CallLoopStart({ inData: LocalColumnObject, inJson: LoopItem });
                    return LocalColumnObject;
                });
            },
            TableInfo: ({ inTableInfo }) => {
                let LocalTableInfo;

                LocalTableInfo = _.cloneDeep(jVarGlobalTableObjects.TableInfo);

                this.SwapData.CallLoopStart({ inData: LocalTableInfo, inJson: inTableInfo });

                return LocalTableInfo;
            }
        }
    };
    static PrepareTableData = {
        PrepareColumns: {
            FromArray: ({ inColumns = [] }) => {
                return _.map(inColumns, (LoopItem) => {
                    let LocalColumnObject = _.cloneDeep(jVarGlobalTableObjects.TableColumnObject);
                    LocalColumnObject.DataAttribute = LoopItem;
                    LocalColumnObject.DisplayName = LoopItem;
                    LocalColumnObject.ShowInTable = true;

                    return LocalColumnObject;
                });
            },
            CloneFromPredefinedObject: ({ inColumns, inItemRow }) => {
                let LocalRowObject = {};
                let LocalCellObject = {};

                LocalRowObject = _.cloneDeep(jVarGlobalTableObjects.TableRowObject);

                LocalRowObject.DisplayText = _.map(inColumns, (LoopItemCells) => {
                    LocalCellObject = _.cloneDeep(jVarGlobalTableObjects.TableDataObject.CellObjectDefault);
                    LocalCellObject.CellValue = inItemRow[LoopItemCells.DataAttribute];

                    return LocalCellObject;
                })

                return LocalRowObject;
            }
        },
        PrepareTableRowObject: {
            General: ({ inColumns, inItemRow }) => {
                let LocalRowObject = {};
                let LocalCellObject = {};

                LocalRowObject = _.cloneDeep(jVarGlobalTableObjects.TableRowObject);

                LocalRowObject.DisplayText = _.map(inColumns, (LoopItemCells) => {
                    LocalCellObject = _.cloneDeep(jVarGlobalTableObjects.TableDataObject.CellObjectDefault);
                    LocalCellObject.CellValue = inItemRow[LoopItemCells.DataAttribute];

                    return LocalCellObject;
                })

                return LocalRowObject;
            }
        }
    };
    static SwapData = {
        LoopRecursiveObject: ({ inData, inJson }) => {
            if (inData !== undefined) {
                _.forOwn(inJson, (value, key) => {
                    if (typeof value === 'object') {
                        if (key !== "DefaultValue") {
                            this.SwapData.LoopRecursiveObject({ inData: inData[key], inJson: value });
                        };
                    } else {
                        if (inData.hasOwnProperty(key)) {
                            inData[key] = value;
                        };
                    }
                });
            };
        },
        CallLoopStart: ({ inData, inJson }) => {
            if (typeof inJson === 'object') {
                this.SwapData.LoopRecursiveObject({ inData, inJson });
            }
        },
        Swap: ({ inTemplateObject, inTableInfo }) => {
            if (inTemplateObject.hasOwnProperty("SearchRowArray")) {
                this.SwapData.CallLoopStart({ inData: inTableInfo.SearchRowArray, inJson: inTemplateObject.SearchRowArray });
            };

            if (inTemplateObject.hasOwnProperty("DataAttributes")) {
                this.SwapData.CallLoopStart({ inData: inTableInfo.DataAttributes, inJson: inTemplateObject.DataAttributes });
            };

            if (inTemplateObject.hasOwnProperty("Vertical")) {
                this.SwapData.CallLoopStart({ inData: inTableInfo.Vertical, inJson: inTemplateObject.Vertical });
            };

            if (inTemplateObject.hasOwnProperty("TableRowOptions")) {
                this.SwapData.CallLoopStart({ inData: inTableInfo.TableRowOptions, inJson: inTemplateObject.TableRowOptions });
            };
            //debug(inTemplateObject);
            if (inTemplateObject.hasOwnProperty("ParentClasses")) {
                this.SwapData.CallLoopStart({ inData: inTableInfo.ParentClasses, inJson: inTemplateObject.ParentClasses });
            };
            if (inTemplateObject.hasOwnProperty("FooterType")) {
                this.SwapData.CallLoopStart({ inData: inTableInfo.FooterType, inJson: inTemplateObject.FooterType });
            };
            if (inTemplateObject.hasOwnProperty("TableBody")) {
                this.SwapData.CallLoopStart({ inData: inTableInfo.TableBody, inJson: inTemplateObject.TableBody });
            };
            inTableInfo.ShowFooter = inTemplateObject.ShowFooter;
        }
    };

    static AllFuncs = {
        Table: {
            SearchRow: {
                Buttons: {
                    Refresh: {
                        OnClick: ({ inEvent, inJsonConfig, inItemConfig }) => {

                            let jVarLocalJsonConfig = JSON.parse(inJsonConfig);

                            let jVarLocalItemConfig = JSON.parse(inItemConfig);
                            let jVarLocalCurrentTarget = inEvent.currentTarget;

                            let jVarLocalAccordionBody = jVarLocalCurrentTarget.closest(".accordion-body");

                            let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
                            let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

                            let jVarLocalFolderName = jVarLocalJsonConfig.inFolderName;
                            let jVarLocalFileName = jVarLocalJsonConfig.inJsonFileName;
                            let jVarLocalItemName = jVarLocalItemConfig.inItemName
                            let jVarLocalScreenName = jVarLocalItemConfig.inScreenName;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/PullData/WithConfig`;
                            fetch(jVarLocalFetchUrl, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    inFolderName: jVarLocalFolderName,
                                    inFileName: jVarLocalFileName,
                                    inItemName: jVarLocalItemName,
                                    inScreenName: jVarLocalScreenName
                                })
                            }).then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };
                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);

                                    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                                        inData: jVarGlobalPresentViewData,
                                        inHtmlParent: jVarLocalAccordionBody
                                    });

                                    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.SetFocusFuncs.TableShow({ inHtmlParent: jVarLocalAccordionBody });
                                };
                            });
                        }
                    }
                },
                SearchFuncs: {
                    SearchWithEnter: (inEvent) => {
                        if (inEvent.keyCode == 13) {
                            let LocalValueToSearch = inEvent.currentTarget.value;
                            let LocalCard = inEvent.currentTarget.closest(".card");

                            this.AllFuncs.Table.SearchRow.SearchFuncs.CommonFuncs.TableSearch({
                                inValueToSearch: LocalValueToSearch,
                                inCard: LocalCard
                            });
                        }
                    },
                    SearchWithEnter_20Apr2022: (inEvent) => {
                        if (inEvent.keyCode == 13) {
                            let LocalValueToSearch = inEvent.currentTarget.value;

                            let LocalCard = inEvent.currentTarget.closest(".card");

                            let KGlobalIndex = LocalCard.querySelector("table").dataset.kglobalindex;
                            let jVarLocalHbsTableBody = document.getElementById("KTablebody");

                            let LocalObjectToHBS = {
                                KData: { TableColumns: [], TableData: [], TableInfo: [] }
                            };

                            //LocalObjectToHBS.KData.TableData = JVarGlobalAPICalls.Table.SearchRow.SearchFuncs.jFHeadSearchPrepareDataCommonSearch({ inData: jVarGlobalPresentViewData[KGlobalIndex].KData.TableData, inValueToSearch: LocalValueToSearch });
                            LocalObjectToHBS.KData.TableData = TableSearchClass.FilterBodyData({ inData: jVarGlobalPresentViewData[KGlobalIndex].KData.TableData, inValueToSearch: LocalValueToSearch });

                            LocalObjectToHBS.KData.TableColumns = jVarGlobalPresentViewData[KGlobalIndex].KData.TableColumns;
                            LocalObjectToHBS.KData.TableInfo = jVarGlobalPresentViewData[KGlobalIndex].KData.TableInfo;
                            LocalCard.querySelector("tbody").innerHTML = Handlebars.compile(jVarLocalHbsTableBody.innerText)(LocalObjectToHBS);
                        }
                    },
                    SearchAllRows: (inEvent) => {
                        let LocalValueToSearch = inEvent.currentTarget.value;
                        let LocalCard = inEvent.currentTarget.closest(".card");

                        this.AllFuncs.Table.SearchRow.SearchFuncs.CommonFuncs.TableSearch({
                            inValueToSearch: LocalValueToSearch,
                            inCard: LocalCard
                        });
                    },
                    SearchAllRows1: (inEvent) => {
                        let LocalValueToSearch = inEvent.currentTarget.value;
                        let jVarLocalHbsTableBody = document.getElementById("KTablebody");
                        let LocalCard = inEvent.currentTarget.closest(".card");

                        let jVarLocalTableBodyId = LocalCard.querySelector(".card-body table tbody");

                        var filter, table, tr, td, i;
                        filter = LocalValueToSearch;

                        for (var i = 0, row; row = jVarLocalTableBodyId.rows[i]; i++) {
                            jVarLocalTableBodyId.rows[i].classList.add("d-none");

                            for (var j = 0, col; col = row.cells[j]; j++) {
                                if (col.innerHTML.includes(filter)) {

                                    jVarLocalTableBodyId.rows[i].classList.remove("d-none");

                                    break;
                                };
                            }
                        };
                    },
                    SearchAllRows_20Apr2022: (inEvent) => {
                        let LocalValueToSearch = inEvent.currentTarget.value;
                        let jVarLocalHbsTableBody = document.getElementById("KTablebody");
                        let LocalCard = inEvent.currentTarget.closest(".card");

                        let LocalObjectToHBS = this.AllFuncs.Table.SearchRow.SearchFuncs.CommonFuncs.CommonSearch({ inHtmlCard: LocalCard, inValueToSearch: LocalValueToSearch });

                        LocalCard.querySelector("tbody").innerHTML = Handlebars.compile(jVarLocalHbsTableBody.innerText)(LocalObjectToHBS);
                    },
                    CommonFuncs: {
                        CommonSearch: ({ inValueToSearch, inHtmlCard }) => {
                            let KGlobalIndex = inHtmlCard.querySelector("table").dataset.kglobalindex;

                            let LocalObjectToHBS = {
                                KData: { TableColumns: [], TableData: [], TableInfo: [] }
                            };

                            LocalObjectToHBS.KData.TableData = TableSearchClass.FilterBodyData({ inData: jVarGlobalPresentViewData[KGlobalIndex].KData.TableData, inValueToSearch: inValueToSearch });

                            LocalObjectToHBS.KData.TableColumns = jVarGlobalPresentViewData[KGlobalIndex].KData.TableColumns;
                            LocalObjectToHBS.KData.TableInfo = jVarGlobalPresentViewData[KGlobalIndex].KData.TableInfo;

                            return LocalObjectToHBS;
                        },
                        TableSearch: ({ inValueToSearch, inCard }) => {
                            let jVarLocalTableBodyId = inCard.querySelector(".card-body table tbody");

                            var filter, table, tr, td, i;
                            filter = inValueToSearch;

                            for (var i = 0, row; row = jVarLocalTableBodyId.rows[i]; i++) {
                                jVarLocalTableBodyId.rows[i].classList.add("d-none");

                                for (var j = 0, col; col = row.cells[j]; j++) {
                                    if (col.innerHTML.includes(filter)) {

                                        jVarLocalTableBodyId.rows[i].classList.remove("d-none");

                                        break;
                                    };
                                }
                            };
                        }
                    }
                },
                Scrollable: {
                    Click: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalCard = jVarLocalCurrentTarget.closest(".card");
                        let jVarLocalTableParent = jVarLocalCard.querySelector(".card-body table").parentElement;

                        if (jVarLocalTableParent.classList.contains("tableFixHead")) {
                            jVarLocalTableParent.classList.remove("tableFixHead");
                        } else {
                            jVarLocalTableParent.classList.add("tableFixHead");
                        }

                    }

                }
            },
            Head: {
                CellClick: (inEvent) => {

                    let jVarLocalCurrentTarget = inEvent.currentTarget;
                    let jVarLocalClassListArray = [];

                    let jVarLocalColumnIndex;
                    let jVarLocalSortedData = [];
                    let jVarLocalGlobalPresentViewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

                    jVarLocalClassListArray = this.AllFuncs.Table.Head.SubFuncs.PrepareClassList({ inCurrentTarget: jVarLocalCurrentTarget });
                    jVarLocalColumnIndex = this.AllFuncs.Table.Head.SubFuncs.ColumnIndexNeeded({ inClassListArray: jVarLocalClassListArray });

                    jVarLocalSortedData = jVarGlobalPresentViewData[0].KData.TableData.sort((x, y) => {
                        return ((x.DisplayText[jVarLocalColumnIndex].CellValue == y.DisplayText[jVarLocalColumnIndex].CellValue) ? 0 : ((x.DisplayText[jVarLocalColumnIndex].CellValue > y.DisplayText[jVarLocalColumnIndex].CellValue) ? 1 : -1));
                    });
                    this.AllFuncs.Table.Head.SubFuncs.Head.Columns.ChangeHeadIcons.StartFunc({
                        inColumnsArray: jVarLocalGlobalPresentViewData[0].KData.TableColumns,
                        inColumnIndex: jVarLocalColumnIndex
                    });

                    jVarLocalGlobalPresentViewData[0].KData.TableData = jVarLocalSortedData;

                    jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommonWithInputData({ inData: jVarLocalGlobalPresentViewData });
                },
                SubFuncs: {
                    PrepareClassList: ({ inCurrentTarget }) => {
                        let jVarLocalClassListArray = [];

                        inCurrentTarget.classList.forEach(element => {
                            jVarLocalClassListArray.push(element);
                        });

                        return jVarLocalClassListArray;
                    },
                    ColumnIndexNeeded: ({ inClassListArray }) => {
                        let jVarLocalClassNameNeeded;
                        let jVarLocalColumnIndex;

                        jVarLocalClassNameNeeded = inClassListArray.find(e => e.startsWith("KCol"));
                        jVarLocalColumnIndex = jVarLocalClassNameNeeded.split("-")[1];

                        return jVarLocalColumnIndex;
                    },
                    Head: {
                        Columns: {
                            ChangeHeadIcons: {
                                StartFunc: ({ inColumnsArray, inColumnIndex }) => {
                                    if (inColumnIndex < inColumnsArray.length) {
                                        this.AllFuncs.Table.Head.SubFuncs.Head.Columns.ChangeHeadIcons.CommonFuncs.ChangeAllIcons({
                                            inColumnsArray
                                        });
                                        inColumnsArray[inColumnIndex].Head.Bs5DownArrow = true;
                                    }
                                },
                                CommonFuncs: {
                                    ChangeAllIcons: ({ inColumnsArray }) => {
                                        return inColumnsArray.map(el => {
                                            el.Head.Bs5DownArrow = false;
                                            el.Head.Bs5UpArrow = false;
                                            return el
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            },
            Body: {
                Row: {
                    ShowClick: ({ inEvent }) => {
                        jVarGlobalClientObject.Api.UserData.Table.Row.Show({ inEvent });

                    }
                }
            }
        }
    };

    static BuildFromData = {
        ClientObject: {
            ForTableAndChangeDataAlso: ({ inData }) => {
                let jVarLocalRowObject = JSON.parse(JSON.stringify(jVarGlobalTableObjects.GlobalRowObject));
                jVarLocalRowObject.HTMLControlType = "Table";
                jVarLocalRowObject.KData.TableColumns = this.BuildFromData.SubFuncs.BuildColumns({ inData });
                jVarLocalRowObject.KData.TableData = this.PrepareTableMainFuncs.KDataContent.PrepareTableDataOnly({
                    inTableData: inData,
                    inTableColumns: jVarLocalRowObject.KData.TableColumns
                });

                jVarLocalRowObject.KData.TableInfo = this.BuildFromData.SubFuncs.BuildTableInfoWithSearchEnter();

                return jVarLocalRowObject;
            },
            ForTable: ({ inData }) => {
                let jVarLocalRowObject = JSON.parse(JSON.stringify(jVarGlobalTableObjects.GlobalRowObject));
                jVarLocalRowObject.HTMLControlType = "Table";
                jVarLocalRowObject.KData.TableColumns = this.BuildFromData.SubFuncs.BuildColumns({ inData });
                jVarLocalRowObject.KData.TableData = inData;
                jVarLocalRowObject.KData.TableInfo = this.BuildFromData.SubFuncs.BuildTableInfo();

                return jVarLocalRowObject;
            },
            ForTableWithSearchEnter: ({ inData }) => {
                let jVarLocalRowObject = JSON.parse(JSON.stringify(jVarGlobalTableObjects.GlobalRowObject));
                jVarLocalRowObject.HTMLControlType = "Table";
                jVarLocalRowObject.KData.TableColumns = KeshavSoftCrud.BuildFromData.SubFuncs.BuildColumns({ inData });
                jVarLocalRowObject.KData.TableData = inData;
                jVarLocalRowObject.KData.TableInfo = KeshavSoftCrud.BuildFromData.SubFuncs.BuildTableInfoWithSearchEnter();

                return jVarLocalRowObject;
            },
            ForVertical: ({ inData }) => {
                let jVarLocalRowObject = JSON.parse(JSON.stringify(jVarGlobalTableObjects.GlobalRowObject));
                jVarLocalRowObject.HTMLControlType = "Vertical";
                jVarLocalRowObject.KData.TableColumns = KeshavSoftCrud.BuildFromData.SubFuncs.BuildColumns({ inData });
                jVarLocalRowObject.KData.TableInfo = KeshavSoftCrud.BuildFromData.SubFuncs.BuildTableInfo();

                return jVarLocalRowObject;
            }
        },
        StartFunc: ({ inData }) => {
            let jVarLocalRowObject = JSON.parse(JSON.stringify(jVarGlobalTableObjects.GlobalRowObject));
            jVarLocalRowObject.HTMLControlType = "Table";
            jVarLocalRowObject.KData.TableColumns = this.BuildFromData.SubFuncs.BuildColumns({ inData });
            jVarLocalRowObject.KData.TableData = inData;
            jVarLocalRowObject.KData.TableInfo = this.BuildFromData.SubFuncs.BuildTableInfo();

            return jVarLocalRowObject;
        },
        SubFuncs: {
            BuildColumns: ({ inData }) => {
                let LocalFirstRowOfData = inData[0];
                let LocalColumnObject;

                return Object.keys(LocalFirstRowOfData).map(LoopItem => {
                    LocalColumnObject = JSON.parse(JSON.stringify(jVarGlobalTableObjects.TableColumn));
                    LocalColumnObject.DataAttribute = LoopItem;
                    LocalColumnObject.DisplayName = LoopItem;
                    LocalColumnObject.ShowInTable = true;

                    return LocalColumnObject;
                });
            },
            BuildTableInfo: () => {
                let jVarLocalTableInfo = JSON.parse(JSON.stringify(jVarGlobalTableObjects.TableInfo));

                jVarLocalTableInfo.SearchRowArray.Label.KTF = true;
                //  jVarLocalTableInfo.SearchRowArray.CreativeTim.SearchWithEnter.KTF = true;

                return jVarLocalTableInfo;
            },
            BuildTableInfoWithSearchEnter: () => {
                let jVarLocalTableInfo = JSON.parse(JSON.stringify(jVarGlobalTableObjects.TableInfo));

                jVarLocalTableInfo.SearchRowArray.Label.KTF = true;
                jVarLocalTableInfo.SearchRowArray.Label.DisplayObject.ColClass = "";

                jVarLocalTableInfo.SearchRowArray.SearchWithEnter.KTF = true;
                jVarLocalTableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass = "";


                return jVarLocalTableInfo;
            }
        }
    };

    static ForEval = {
        FromArray: ({ injVarClientEval, injVarTableFooterCells, inIndex }) => {
            let jVarLocalReturnData;

            if (injVarTableFooterCells[inIndex].value === "") {
                injVarTableFooterCells[inIndex].value = 0;
            }

            jVarLocalReturnData = injVarClientEval.replace(`{{${injVarTableFooterCells[inIndex].id}}}`, parseFloat(injVarTableFooterCells[inIndex].value));

            return jVarLocalReturnData;
        },
        FromObject: ({ injVarClientEval, inDataAsObject }) => {
            let jVarLocalReturnData;
            Object.entries(inDataAsObject).forEach(
                ([key, value]) => {

                    injVarClientEval = injVarClientEval.replace(`{{${key}}}`, parseFloat(value));
                }
            );

            jVarLocalReturnData = eval(injVarClientEval);

            return jVarLocalReturnData;
        }
    };

    static DataListFuns = {
        ReverseFunc: ({ inParentDiv }) => {
            try {
                let jVarLocalDataListForReverse = inParentDiv.querySelectorAll("input[list][data-datalistreverse='true']");

                let jVarLocalDataListValue;

                jVarLocalDataListForReverse.forEach((LoopItem) => {
                    jVarLocalDataListValue = this.DataListFuns.collectionContains({
                        collection: LoopItem.list.options,
                        searchText: LoopItem.dataset.ksdatalistvalue
                    });

                    LoopItem.value = jVarLocalDataListValue;
                });

            } catch (error) {
                console.log("error : ", error);
            };

        },
        collectionContains: ({ collection, searchText }) => {
            for (var i = 0; i < collection.length; i++) {
                if (collection[i].text === searchText) {
                    return collection[i].value;
                }
            }
            return "";
        }
    }
};

HandleBarsHelpers();
jVarHbsTemplatesFill();

console.log("pppppppppppppp----------");