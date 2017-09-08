"use strict"

module.exports = {
  rules: {
    "no-cond-assign": ["error", "except-parens"],
    // "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    // "no-extra-parens": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "consistent-return": "error",
    "default-case": "error",
    "no-case-declarations": "error",
    "eqeqeq": ["error", "allow-null"],
    "no-else-return": "error",
    "no-empty-function": ["error", {"allow": ["functions", "generatorFunctions", "methods", "generatorMethods", "constructors"]}],
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    // "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    // "no-magic-numbers": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    // "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    // "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-with": "error",
    "radix": "error",
    "require-await": "error",
    "init-declarations": ["error", "always"],
    "no-delete-var": "error",
    "no-restricted-globals": ["error",
      // window (browser)
      "alert", "blur", "confirm", "event", "fetch", "find", "focus", "history",
      "length", "location", "name", "navigator", "open", "parent", "print",
      "prompt", "scroll", "self", "status", "stop", "top",
      // global (node)
      "root",
      // other
      "test",
      // These global functions are broken
      "isNaN", "isFinite",
    ],
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "off",
    "no-unused-vars": ["error", {"argsIgnorePattern": "^_.", "varsIgnorePattern": "^_."}],
    // "no-use-before-define": ["error", {"functions": false, "classes": false}],
    // "global-require": "error",
    "no-path-concat": "error",
    // "no-bitwise": "error",
    "strict": ["error", "safe"],

    // Style

    "curly": ["error", "multi-line"],
    // "dot-location": "error",
    "dot-notation": "error",
    "no-floating-decimal": "error",
    // "no-multi-spaces": ["error", {"exceptions": {"VariableDeclarator": true}}],
    "no-multi-str": "error",
    "no-warning-comments": ["error", {"terms": ["fixme"], "location": "anywhere"}],
    "yoda": "error",
    "no-label-var": "error",
    "array-bracket-spacing": "error",
    "block-spacing": ["error", "never"],
    "brace-style": ["error", "stroustrup", {"allowSingleLine": true}],
    // "camelcase": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "func-names": ["error", "as-needed"],
    // "func-style": ["error", "declaration"],
    // "id-length": ["error", {"min": 3}],
    "indent": ["error", 2, {"SwitchCase": 1}],
    // "key-spacing": ["error", {"align": "value"}],
    // "key-spacing": "error",
    "keyword-spacing": "error",
    "lines-around-comment": "error",
    "lines-around-directive": "error",
    "max-len": ["error", {"code": 120}],
    // "new-cap": "error",
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": "error",
    // "no-multiple-empty-lines": "error",
    "no-new-object": "error",
    // "no-plusplus": "error",
    "no-tabs": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    // "object-curly-newline": "error",
    "object-curly-spacing": "error",
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "after", {"overrides": {"?": "off", ":": "off"}}],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single", {"allowTemplateLiterals": true, "avoidEscape": true}],
    "semi": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    // "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "constructor-super": "error",
    "generator-star-spacing": ["error", "after"],
    "no-class-assign": "error",
    // "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    // "require-yield": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
  },
}
