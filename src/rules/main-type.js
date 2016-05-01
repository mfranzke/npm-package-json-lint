"use strict";

const isString = require("./../validators/type").isString;
const LintIssue = require("./../LintIssue");
const lintId = "main-type";
const lintType = "error";
const nodeName = "main";
const message = "Type should be a string";
const ruleType = "type";

const lint = function(packageJsonData) {
  if (!isString(packageJsonData, nodeName)) {
    return new LintIssue(lintId, lintType, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.lintType = lintType;
