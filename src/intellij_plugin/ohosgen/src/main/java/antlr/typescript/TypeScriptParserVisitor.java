/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package antlr.typescript; // Generated from TypeScriptParser.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link TypeScriptParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface TypeScriptParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#initializer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInitializer(TypeScriptParser.InitializerContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#bindingPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBindingPattern(TypeScriptParser.BindingPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeParameters}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeParameters(TypeScriptParser.TypeParametersContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeParameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeParameterList(TypeScriptParser.TypeParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeParameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeParameter(TypeScriptParser.TypeParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#constraint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstraint(TypeScriptParser.ConstraintContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeArguments}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeArguments(TypeScriptParser.TypeArgumentsContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeArgumentList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeArgumentList(TypeScriptParser.TypeArgumentListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeArgument(TypeScriptParser.TypeArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#type_}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_(TypeScriptParser.Type_Context ctx);
	/**
	 * Visit a parse tree produced by the {@code Intersection}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntersection(TypeScriptParser.IntersectionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Primary}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrimary(TypeScriptParser.PrimaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code Union}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnion(TypeScriptParser.UnionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code RedefinitionOfType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRedefinitionOfType(TypeScriptParser.RedefinitionOfTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PredefinedPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPredefinedPrimType(TypeScriptParser.PredefinedPrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ArrayPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayPrimType(TypeScriptParser.ArrayPrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ParenthesizedPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParenthesizedPrimType(TypeScriptParser.ParenthesizedPrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ThisPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitThisPrimType(TypeScriptParser.ThisPrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code TuplePrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTuplePrimType(TypeScriptParser.TuplePrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code KeyOfType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyOfType(TypeScriptParser.KeyOfTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ObjectPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectPrimType(TypeScriptParser.ObjectPrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ReferencePrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReferencePrimType(TypeScriptParser.ReferencePrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code QueryPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQueryPrimType(TypeScriptParser.QueryPrimTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#predefinedType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPredefinedType(TypeScriptParser.PredefinedTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeReference}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeReference(TypeScriptParser.TypeReferenceContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeGeneric}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeGeneric(TypeScriptParser.TypeGenericContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeName(TypeScriptParser.TypeNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#objectType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectType(TypeScriptParser.ObjectTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeBody(TypeScriptParser.TypeBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeMemberList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeMemberList(TypeScriptParser.TypeMemberListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeMember(TypeScriptParser.TypeMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#arrayType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayType(TypeScriptParser.ArrayTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#tupleType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleType(TypeScriptParser.TupleTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#tupleElementTypes}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleElementTypes(TypeScriptParser.TupleElementTypesContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#functionType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionType(TypeScriptParser.FunctionTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#constructorType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstructorType(TypeScriptParser.ConstructorTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeQuery}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeQuery(TypeScriptParser.TypeQueryContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeQueryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeQueryExpression(TypeScriptParser.TypeQueryExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#propertySignatur}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertySignatur(TypeScriptParser.PropertySignaturContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeAnnotation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeAnnotation(TypeScriptParser.TypeAnnotationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#callSignature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCallSignature(TypeScriptParser.CallSignatureContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#parameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameterList(TypeScriptParser.ParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#requiredParameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRequiredParameterList(TypeScriptParser.RequiredParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameter(TypeScriptParser.ParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#optionalParameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOptionalParameter(TypeScriptParser.OptionalParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#restParameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRestParameter(TypeScriptParser.RestParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#requiredParameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRequiredParameter(TypeScriptParser.RequiredParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#accessibilityModifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAccessibilityModifier(TypeScriptParser.AccessibilityModifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#identifierOrPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierOrPattern(TypeScriptParser.IdentifierOrPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#constructSignature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstructSignature(TypeScriptParser.ConstructSignatureContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#indexSignature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndexSignature(TypeScriptParser.IndexSignatureContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#methodSignature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMethodSignature(TypeScriptParser.MethodSignatureContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#typeAliasDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeAliasDeclaration(TypeScriptParser.TypeAliasDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#constructorDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstructorDeclaration(TypeScriptParser.ConstructorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#interfaceDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInterfaceDeclaration(TypeScriptParser.InterfaceDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#interfaceExtendsClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInterfaceExtendsClause(TypeScriptParser.InterfaceExtendsClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#classOrInterfaceTypeList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassOrInterfaceTypeList(TypeScriptParser.ClassOrInterfaceTypeListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#enumDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumDeclaration(TypeScriptParser.EnumDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#enumBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumBody(TypeScriptParser.EnumBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#enumMemberList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumMemberList(TypeScriptParser.EnumMemberListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#enumMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumMember(TypeScriptParser.EnumMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#namespaceDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamespaceDeclaration(TypeScriptParser.NamespaceDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#namespaceName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamespaceName(TypeScriptParser.NamespaceNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importAliasDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportAliasDeclaration(TypeScriptParser.ImportAliasDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#decoratorList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDecoratorList(TypeScriptParser.DecoratorListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#decorator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDecorator(TypeScriptParser.DecoratorContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#decoratorMemberExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDecoratorMemberExpression(TypeScriptParser.DecoratorMemberExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#decoratorCallExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDecoratorCallExpression(TypeScriptParser.DecoratorCallExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(TypeScriptParser.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#sourceElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSourceElement(TypeScriptParser.SourceElementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(TypeScriptParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(TypeScriptParser.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#statementList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatementList(TypeScriptParser.StatementListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#abstractDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAbstractDeclaration(TypeScriptParser.AbstractDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportStatement(TypeScriptParser.ImportStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importFromBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportFromBlock(TypeScriptParser.ImportFromBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importModuleItems}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportModuleItems(TypeScriptParser.ImportModuleItemsContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importAliasName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportAliasName(TypeScriptParser.ImportAliasNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#moduleExportName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitModuleExportName(TypeScriptParser.ModuleExportNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importedBinding}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportedBinding(TypeScriptParser.ImportedBindingContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importDefault}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportDefault(TypeScriptParser.ImportDefaultContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importNamespace}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportNamespace(TypeScriptParser.ImportNamespaceContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#importFrom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportFrom(TypeScriptParser.ImportFromContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#aliasName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAliasName(TypeScriptParser.AliasNameContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ExportDeclaration}
	 * labeled alternative in {@link TypeScriptParser#exportStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExportDeclaration(TypeScriptParser.ExportDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ExportDefaultDeclaration}
	 * labeled alternative in {@link TypeScriptParser#exportStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExportDefaultDeclaration(TypeScriptParser.ExportDefaultDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#exportFromBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExportFromBlock(TypeScriptParser.ExportFromBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#exportModuleItems}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExportModuleItems(TypeScriptParser.ExportModuleItemsContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#exportAliasName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExportAliasName(TypeScriptParser.ExportAliasNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#declaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeclaration(TypeScriptParser.DeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#variableStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableStatement(TypeScriptParser.VariableStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#variableDeclarationList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableDeclarationList(TypeScriptParser.VariableDeclarationListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#variableDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableDeclaration(TypeScriptParser.VariableDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#emptyStatement_}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEmptyStatement_(TypeScriptParser.EmptyStatement_Context ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#expressionStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpressionStatement(TypeScriptParser.ExpressionStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#ifStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfStatement(TypeScriptParser.IfStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code DoStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDoStatement(TypeScriptParser.DoStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code WhileStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhileStatement(TypeScriptParser.WhileStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ForStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForStatement(TypeScriptParser.ForStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ForVarStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForVarStatement(TypeScriptParser.ForVarStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ForInStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForInStatement(TypeScriptParser.ForInStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ForVarInStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForVarInStatement(TypeScriptParser.ForVarInStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ForOfStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForOfStatement(TypeScriptParser.ForOfStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ForVarOfStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForVarOfStatement(TypeScriptParser.ForVarOfStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#varModifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarModifier(TypeScriptParser.VarModifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#continueStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitContinueStatement(TypeScriptParser.ContinueStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#breakStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBreakStatement(TypeScriptParser.BreakStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#returnStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReturnStatement(TypeScriptParser.ReturnStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#yieldStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitYieldStatement(TypeScriptParser.YieldStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#withStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithStatement(TypeScriptParser.WithStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#switchStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSwitchStatement(TypeScriptParser.SwitchStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#caseBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaseBlock(TypeScriptParser.CaseBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#caseClauses}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaseClauses(TypeScriptParser.CaseClausesContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#caseClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaseClause(TypeScriptParser.CaseClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#defaultClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDefaultClause(TypeScriptParser.DefaultClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#labelledStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLabelledStatement(TypeScriptParser.LabelledStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#throwStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitThrowStatement(TypeScriptParser.ThrowStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#tryStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTryStatement(TypeScriptParser.TryStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#catchProduction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCatchProduction(TypeScriptParser.CatchProductionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#finallyProduction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFinallyProduction(TypeScriptParser.FinallyProductionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#debuggerStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDebuggerStatement(TypeScriptParser.DebuggerStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#functionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionDeclaration(TypeScriptParser.FunctionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#classDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassDeclaration(TypeScriptParser.ClassDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#classHeritage}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassHeritage(TypeScriptParser.ClassHeritageContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#classTail}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassTail(TypeScriptParser.ClassTailContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#classExtendsClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassExtendsClause(TypeScriptParser.ClassExtendsClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#implementsClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImplementsClause(TypeScriptParser.ImplementsClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#classElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassElement(TypeScriptParser.ClassElementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PropertyDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertyDeclarationExpression(TypeScriptParser.PropertyDeclarationExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code MethodDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMethodDeclarationExpression(TypeScriptParser.MethodDeclarationExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code GetterSetterDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGetterSetterDeclarationExpression(TypeScriptParser.GetterSetterDeclarationExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code AbstractMemberDeclaration}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAbstractMemberDeclaration(TypeScriptParser.AbstractMemberDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#propertyMemberBase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertyMemberBase(TypeScriptParser.PropertyMemberBaseContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#indexMemberDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndexMemberDeclaration(TypeScriptParser.IndexMemberDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#generatorMethod}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneratorMethod(TypeScriptParser.GeneratorMethodContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#generatorFunctionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneratorFunctionDeclaration(TypeScriptParser.GeneratorFunctionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#generatorBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneratorBlock(TypeScriptParser.GeneratorBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#generatorDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneratorDefinition(TypeScriptParser.GeneratorDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#iteratorBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIteratorBlock(TypeScriptParser.IteratorBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#iteratorDefinition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIteratorDefinition(TypeScriptParser.IteratorDefinitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#classElementName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassElementName(TypeScriptParser.ClassElementNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#privateIdentifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrivateIdentifier(TypeScriptParser.PrivateIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#formalParameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormalParameterList(TypeScriptParser.FormalParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#formalParameterArg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormalParameterArg(TypeScriptParser.FormalParameterArgContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#lastFormalParameterArg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLastFormalParameterArg(TypeScriptParser.LastFormalParameterArgContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#functionBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionBody(TypeScriptParser.FunctionBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#sourceElements}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSourceElements(TypeScriptParser.SourceElementsContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#arrayLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayLiteral(TypeScriptParser.ArrayLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#elementList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElementList(TypeScriptParser.ElementListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#arrayElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayElement(TypeScriptParser.ArrayElementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#objectLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectLiteral(TypeScriptParser.ObjectLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PropertyExpressionAssignment}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertyExpressionAssignment(TypeScriptParser.PropertyExpressionAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ComputedPropertyExpressionAssignment}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComputedPropertyExpressionAssignment(TypeScriptParser.ComputedPropertyExpressionAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PropertyGetter}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertyGetter(TypeScriptParser.PropertyGetterContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PropertySetter}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertySetter(TypeScriptParser.PropertySetterContext ctx);
	/**
	 * Visit a parse tree produced by the {@code MethodProperty}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMethodProperty(TypeScriptParser.MethodPropertyContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PropertyShorthand}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertyShorthand(TypeScriptParser.PropertyShorthandContext ctx);
	/**
	 * Visit a parse tree produced by the {@code SpreadOperator}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSpreadOperator(TypeScriptParser.SpreadOperatorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code RestParameterInObject}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRestParameterInObject(TypeScriptParser.RestParameterInObjectContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#getAccessor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGetAccessor(TypeScriptParser.GetAccessorContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#setAccessor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetAccessor(TypeScriptParser.SetAccessorContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#propertyName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropertyName(TypeScriptParser.PropertyNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#arguments}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArguments(TypeScriptParser.ArgumentsContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#argumentList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgumentList(TypeScriptParser.ArgumentListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#argument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgument(TypeScriptParser.ArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#expressionSequence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpressionSequence(TypeScriptParser.ExpressionSequenceContext ctx);
	/**
	 * Visit a parse tree produced by the {@code TemplateStringExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTemplateStringExpression(TypeScriptParser.TemplateStringExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code GeneratorsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneratorsExpression(TypeScriptParser.GeneratorsExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PowerExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPowerExpression(TypeScriptParser.PowerExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code InExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInExpression(TypeScriptParser.InExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code GenericTypes}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericTypes(TypeScriptParser.GenericTypesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code OptionalChainExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOptionalChainExpression(TypeScriptParser.OptionalChainExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ArgumentsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgumentsExpression(TypeScriptParser.ArgumentsExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ThisExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitThisExpression(TypeScriptParser.ThisExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code TypeofExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeofExpression(TypeScriptParser.TypeofExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code GeneratorsFunctionExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneratorsFunctionExpression(TypeScriptParser.GeneratorsFunctionExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code EqualityExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEqualityExpression(TypeScriptParser.EqualityExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code BitXOrExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBitXOrExpression(TypeScriptParser.BitXOrExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code CastAsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCastAsExpression(TypeScriptParser.CastAsExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code MultiplicativeExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMultiplicativeExpression(TypeScriptParser.MultiplicativeExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code BitShiftExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBitShiftExpression(TypeScriptParser.BitShiftExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code AdditiveExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAdditiveExpression(TypeScriptParser.AdditiveExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code RelationalExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRelationalExpression(TypeScriptParser.RelationalExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code BitNotExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBitNotExpression(TypeScriptParser.BitNotExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code NewExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNewExpression(TypeScriptParser.NewExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code LiteralExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteralExpression(TypeScriptParser.LiteralExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ArrayLiteralExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayLiteralExpression(TypeScriptParser.ArrayLiteralExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code MemberDotExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMemberDotExpression(TypeScriptParser.MemberDotExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code MemberIndexExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMemberIndexExpression(TypeScriptParser.MemberIndexExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code BitAndExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBitAndExpression(TypeScriptParser.BitAndExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code BitOrExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBitOrExpression(TypeScriptParser.BitOrExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code AssignmentOperatorExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignmentOperatorExpression(TypeScriptParser.AssignmentOperatorExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code VoidExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVoidExpression(TypeScriptParser.VoidExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code TernaryExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTernaryExpression(TypeScriptParser.TernaryExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code LogicalAndExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalAndExpression(TypeScriptParser.LogicalAndExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PreIncrementExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPreIncrementExpression(TypeScriptParser.PreIncrementExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ObjectLiteralExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectLiteralExpression(TypeScriptParser.ObjectLiteralExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code LogicalOrExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogicalOrExpression(TypeScriptParser.LogicalOrExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code NonNullAssertionExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNonNullAssertionExpression(TypeScriptParser.NonNullAssertionExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code NotExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNotExpression(TypeScriptParser.NotExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PreDecreaseExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPreDecreaseExpression(TypeScriptParser.PreDecreaseExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code AwaitExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAwaitExpression(TypeScriptParser.AwaitExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code FunctionExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionExpression(TypeScriptParser.FunctionExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code UnaryMinusExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnaryMinusExpression(TypeScriptParser.UnaryMinusExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code AssignmentExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignmentExpression(TypeScriptParser.AssignmentExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PostDecreaseExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPostDecreaseExpression(TypeScriptParser.PostDecreaseExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code InstanceofExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInstanceofExpression(TypeScriptParser.InstanceofExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code UnaryPlusExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnaryPlusExpression(TypeScriptParser.UnaryPlusExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code DeleteExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeleteExpression(TypeScriptParser.DeleteExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code IteratorsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIteratorsExpression(TypeScriptParser.IteratorsExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code SuperExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSuperExpression(TypeScriptParser.SuperExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ParenthesizedExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParenthesizedExpression(TypeScriptParser.ParenthesizedExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code PostIncrementExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPostIncrementExpression(TypeScriptParser.PostIncrementExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code YieldExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitYieldExpression(TypeScriptParser.YieldExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ClassExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassExpression(TypeScriptParser.ClassExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code IdentifierExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierExpression(TypeScriptParser.IdentifierExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code CoalesceExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCoalesceExpression(TypeScriptParser.CoalesceExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#asExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAsExpression(TypeScriptParser.AsExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#assignable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignable(TypeScriptParser.AssignableContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#anonymousFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnonymousFunction(TypeScriptParser.AnonymousFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#arrowFunctionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrowFunctionDeclaration(TypeScriptParser.ArrowFunctionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#arrowFunctionParameters}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrowFunctionParameters(TypeScriptParser.ArrowFunctionParametersContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#arrowFunctionBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrowFunctionBody(TypeScriptParser.ArrowFunctionBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#assignmentOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignmentOperator(TypeScriptParser.AssignmentOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(TypeScriptParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#templateStringLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTemplateStringLiteral(TypeScriptParser.TemplateStringLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#templateStringAtom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTemplateStringAtom(TypeScriptParser.TemplateStringAtomContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#numericLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumericLiteral(TypeScriptParser.NumericLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#bigintLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBigintLiteral(TypeScriptParser.BigintLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#getter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGetter(TypeScriptParser.GetterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#setter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetter(TypeScriptParser.SetterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#identifierName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierName(TypeScriptParser.IdentifierNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifier(TypeScriptParser.IdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#identifierOrKeyWord}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierOrKeyWord(TypeScriptParser.IdentifierOrKeyWordContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#reservedWord}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReservedWord(TypeScriptParser.ReservedWordContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#keyword}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword(TypeScriptParser.KeywordContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeScriptParser#eos}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEos(TypeScriptParser.EosContext ctx);
}