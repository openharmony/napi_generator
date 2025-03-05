package antlr;// Generated from TypeScriptParser.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link TypeScriptParser}.
 */
public interface TypeScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#initializer}.
	 * @param ctx the parse tree
	 */
	void enterInitializer(TypeScriptParser.InitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#initializer}.
	 * @param ctx the parse tree
	 */
	void exitInitializer(TypeScriptParser.InitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#bindingPattern}.
	 * @param ctx the parse tree
	 */
	void enterBindingPattern(TypeScriptParser.BindingPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#bindingPattern}.
	 * @param ctx the parse tree
	 */
	void exitBindingPattern(TypeScriptParser.BindingPatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeParameters}.
	 * @param ctx the parse tree
	 */
	void enterTypeParameters(TypeScriptParser.TypeParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeParameters}.
	 * @param ctx the parse tree
	 */
	void exitTypeParameters(TypeScriptParser.TypeParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeParameterList}.
	 * @param ctx the parse tree
	 */
	void enterTypeParameterList(TypeScriptParser.TypeParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeParameterList}.
	 * @param ctx the parse tree
	 */
	void exitTypeParameterList(TypeScriptParser.TypeParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeParameter}.
	 * @param ctx the parse tree
	 */
	void enterTypeParameter(TypeScriptParser.TypeParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeParameter}.
	 * @param ctx the parse tree
	 */
	void exitTypeParameter(TypeScriptParser.TypeParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#constraint}.
	 * @param ctx the parse tree
	 */
	void enterConstraint(TypeScriptParser.ConstraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#constraint}.
	 * @param ctx the parse tree
	 */
	void exitConstraint(TypeScriptParser.ConstraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeArguments}.
	 * @param ctx the parse tree
	 */
	void enterTypeArguments(TypeScriptParser.TypeArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeArguments}.
	 * @param ctx the parse tree
	 */
	void exitTypeArguments(TypeScriptParser.TypeArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeArgumentList}.
	 * @param ctx the parse tree
	 */
	void enterTypeArgumentList(TypeScriptParser.TypeArgumentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeArgumentList}.
	 * @param ctx the parse tree
	 */
	void exitTypeArgumentList(TypeScriptParser.TypeArgumentListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeArgument}.
	 * @param ctx the parse tree
	 */
	void enterTypeArgument(TypeScriptParser.TypeArgumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeArgument}.
	 * @param ctx the parse tree
	 */
	void exitTypeArgument(TypeScriptParser.TypeArgumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#type_}.
	 * @param ctx the parse tree
	 */
	void enterType_(TypeScriptParser.Type_Context ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#type_}.
	 * @param ctx the parse tree
	 */
	void exitType_(TypeScriptParser.Type_Context ctx);
	/**
	 * Enter a parse tree produced by the {@code Intersection}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 */
	void enterIntersection(TypeScriptParser.IntersectionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Intersection}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 */
	void exitIntersection(TypeScriptParser.IntersectionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Primary}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 */
	void enterPrimary(TypeScriptParser.PrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Primary}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 */
	void exitPrimary(TypeScriptParser.PrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Union}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 */
	void enterUnion(TypeScriptParser.UnionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Union}
	 * labeled alternative in {@link TypeScriptParser#unionOrIntersectionOrPrimaryType}.
	 * @param ctx the parse tree
	 */
	void exitUnion(TypeScriptParser.UnionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code RedefinitionOfType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterRedefinitionOfType(TypeScriptParser.RedefinitionOfTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code RedefinitionOfType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitRedefinitionOfType(TypeScriptParser.RedefinitionOfTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PredefinedPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterPredefinedPrimType(TypeScriptParser.PredefinedPrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PredefinedPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitPredefinedPrimType(TypeScriptParser.PredefinedPrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ArrayPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterArrayPrimType(TypeScriptParser.ArrayPrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ArrayPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitArrayPrimType(TypeScriptParser.ArrayPrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ParenthesizedPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedPrimType(TypeScriptParser.ParenthesizedPrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ParenthesizedPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedPrimType(TypeScriptParser.ParenthesizedPrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ThisPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterThisPrimType(TypeScriptParser.ThisPrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ThisPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitThisPrimType(TypeScriptParser.ThisPrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TuplePrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterTuplePrimType(TypeScriptParser.TuplePrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TuplePrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitTuplePrimType(TypeScriptParser.TuplePrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code KeyOfType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterKeyOfType(TypeScriptParser.KeyOfTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code KeyOfType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitKeyOfType(TypeScriptParser.KeyOfTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ObjectPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterObjectPrimType(TypeScriptParser.ObjectPrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ObjectPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitObjectPrimType(TypeScriptParser.ObjectPrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ReferencePrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterReferencePrimType(TypeScriptParser.ReferencePrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ReferencePrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitReferencePrimType(TypeScriptParser.ReferencePrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code QueryPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterQueryPrimType(TypeScriptParser.QueryPrimTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code QueryPrimType}
	 * labeled alternative in {@link TypeScriptParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitQueryPrimType(TypeScriptParser.QueryPrimTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#predefinedType}.
	 * @param ctx the parse tree
	 */
	void enterPredefinedType(TypeScriptParser.PredefinedTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#predefinedType}.
	 * @param ctx the parse tree
	 */
	void exitPredefinedType(TypeScriptParser.PredefinedTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeReference}.
	 * @param ctx the parse tree
	 */
	void enterTypeReference(TypeScriptParser.TypeReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeReference}.
	 * @param ctx the parse tree
	 */
	void exitTypeReference(TypeScriptParser.TypeReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeGeneric}.
	 * @param ctx the parse tree
	 */
	void enterTypeGeneric(TypeScriptParser.TypeGenericContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeGeneric}.
	 * @param ctx the parse tree
	 */
	void exitTypeGeneric(TypeScriptParser.TypeGenericContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeName}.
	 * @param ctx the parse tree
	 */
	void enterTypeName(TypeScriptParser.TypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeName}.
	 * @param ctx the parse tree
	 */
	void exitTypeName(TypeScriptParser.TypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#objectType}.
	 * @param ctx the parse tree
	 */
	void enterObjectType(TypeScriptParser.ObjectTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#objectType}.
	 * @param ctx the parse tree
	 */
	void exitObjectType(TypeScriptParser.ObjectTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeBody}.
	 * @param ctx the parse tree
	 */
	void enterTypeBody(TypeScriptParser.TypeBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeBody}.
	 * @param ctx the parse tree
	 */
	void exitTypeBody(TypeScriptParser.TypeBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeMemberList}.
	 * @param ctx the parse tree
	 */
	void enterTypeMemberList(TypeScriptParser.TypeMemberListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeMemberList}.
	 * @param ctx the parse tree
	 */
	void exitTypeMemberList(TypeScriptParser.TypeMemberListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeMember}.
	 * @param ctx the parse tree
	 */
	void enterTypeMember(TypeScriptParser.TypeMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeMember}.
	 * @param ctx the parse tree
	 */
	void exitTypeMember(TypeScriptParser.TypeMemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void enterArrayType(TypeScriptParser.ArrayTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void exitArrayType(TypeScriptParser.ArrayTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#tupleType}.
	 * @param ctx the parse tree
	 */
	void enterTupleType(TypeScriptParser.TupleTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#tupleType}.
	 * @param ctx the parse tree
	 */
	void exitTupleType(TypeScriptParser.TupleTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#tupleElementTypes}.
	 * @param ctx the parse tree
	 */
	void enterTupleElementTypes(TypeScriptParser.TupleElementTypesContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#tupleElementTypes}.
	 * @param ctx the parse tree
	 */
	void exitTupleElementTypes(TypeScriptParser.TupleElementTypesContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#functionType}.
	 * @param ctx the parse tree
	 */
	void enterFunctionType(TypeScriptParser.FunctionTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#functionType}.
	 * @param ctx the parse tree
	 */
	void exitFunctionType(TypeScriptParser.FunctionTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#constructorType}.
	 * @param ctx the parse tree
	 */
	void enterConstructorType(TypeScriptParser.ConstructorTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#constructorType}.
	 * @param ctx the parse tree
	 */
	void exitConstructorType(TypeScriptParser.ConstructorTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeQuery}.
	 * @param ctx the parse tree
	 */
	void enterTypeQuery(TypeScriptParser.TypeQueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeQuery}.
	 * @param ctx the parse tree
	 */
	void exitTypeQuery(TypeScriptParser.TypeQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeQueryExpression}.
	 * @param ctx the parse tree
	 */
	void enterTypeQueryExpression(TypeScriptParser.TypeQueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeQueryExpression}.
	 * @param ctx the parse tree
	 */
	void exitTypeQueryExpression(TypeScriptParser.TypeQueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#propertySignatur}.
	 * @param ctx the parse tree
	 */
	void enterPropertySignatur(TypeScriptParser.PropertySignaturContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#propertySignatur}.
	 * @param ctx the parse tree
	 */
	void exitPropertySignatur(TypeScriptParser.PropertySignaturContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeAnnotation}.
	 * @param ctx the parse tree
	 */
	void enterTypeAnnotation(TypeScriptParser.TypeAnnotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeAnnotation}.
	 * @param ctx the parse tree
	 */
	void exitTypeAnnotation(TypeScriptParser.TypeAnnotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#callSignature}.
	 * @param ctx the parse tree
	 */
	void enterCallSignature(TypeScriptParser.CallSignatureContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#callSignature}.
	 * @param ctx the parse tree
	 */
	void exitCallSignature(TypeScriptParser.CallSignatureContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(TypeScriptParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(TypeScriptParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#requiredParameterList}.
	 * @param ctx the parse tree
	 */
	void enterRequiredParameterList(TypeScriptParser.RequiredParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#requiredParameterList}.
	 * @param ctx the parse tree
	 */
	void exitRequiredParameterList(TypeScriptParser.RequiredParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(TypeScriptParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(TypeScriptParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#optionalParameter}.
	 * @param ctx the parse tree
	 */
	void enterOptionalParameter(TypeScriptParser.OptionalParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#optionalParameter}.
	 * @param ctx the parse tree
	 */
	void exitOptionalParameter(TypeScriptParser.OptionalParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#restParameter}.
	 * @param ctx the parse tree
	 */
	void enterRestParameter(TypeScriptParser.RestParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#restParameter}.
	 * @param ctx the parse tree
	 */
	void exitRestParameter(TypeScriptParser.RestParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#requiredParameter}.
	 * @param ctx the parse tree
	 */
	void enterRequiredParameter(TypeScriptParser.RequiredParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#requiredParameter}.
	 * @param ctx the parse tree
	 */
	void exitRequiredParameter(TypeScriptParser.RequiredParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#accessibilityModifier}.
	 * @param ctx the parse tree
	 */
	void enterAccessibilityModifier(TypeScriptParser.AccessibilityModifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#accessibilityModifier}.
	 * @param ctx the parse tree
	 */
	void exitAccessibilityModifier(TypeScriptParser.AccessibilityModifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#identifierOrPattern}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierOrPattern(TypeScriptParser.IdentifierOrPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#identifierOrPattern}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierOrPattern(TypeScriptParser.IdentifierOrPatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#constructSignature}.
	 * @param ctx the parse tree
	 */
	void enterConstructSignature(TypeScriptParser.ConstructSignatureContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#constructSignature}.
	 * @param ctx the parse tree
	 */
	void exitConstructSignature(TypeScriptParser.ConstructSignatureContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#indexSignature}.
	 * @param ctx the parse tree
	 */
	void enterIndexSignature(TypeScriptParser.IndexSignatureContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#indexSignature}.
	 * @param ctx the parse tree
	 */
	void exitIndexSignature(TypeScriptParser.IndexSignatureContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#methodSignature}.
	 * @param ctx the parse tree
	 */
	void enterMethodSignature(TypeScriptParser.MethodSignatureContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#methodSignature}.
	 * @param ctx the parse tree
	 */
	void exitMethodSignature(TypeScriptParser.MethodSignatureContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#typeAliasDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterTypeAliasDeclaration(TypeScriptParser.TypeAliasDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#typeAliasDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitTypeAliasDeclaration(TypeScriptParser.TypeAliasDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#constructorDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterConstructorDeclaration(TypeScriptParser.ConstructorDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#constructorDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitConstructorDeclaration(TypeScriptParser.ConstructorDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#interfaceDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterInterfaceDeclaration(TypeScriptParser.InterfaceDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#interfaceDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitInterfaceDeclaration(TypeScriptParser.InterfaceDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#interfaceExtendsClause}.
	 * @param ctx the parse tree
	 */
	void enterInterfaceExtendsClause(TypeScriptParser.InterfaceExtendsClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#interfaceExtendsClause}.
	 * @param ctx the parse tree
	 */
	void exitInterfaceExtendsClause(TypeScriptParser.InterfaceExtendsClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#classOrInterfaceTypeList}.
	 * @param ctx the parse tree
	 */
	void enterClassOrInterfaceTypeList(TypeScriptParser.ClassOrInterfaceTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#classOrInterfaceTypeList}.
	 * @param ctx the parse tree
	 */
	void exitClassOrInterfaceTypeList(TypeScriptParser.ClassOrInterfaceTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#enumDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterEnumDeclaration(TypeScriptParser.EnumDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#enumDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitEnumDeclaration(TypeScriptParser.EnumDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#enumBody}.
	 * @param ctx the parse tree
	 */
	void enterEnumBody(TypeScriptParser.EnumBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#enumBody}.
	 * @param ctx the parse tree
	 */
	void exitEnumBody(TypeScriptParser.EnumBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#enumMemberList}.
	 * @param ctx the parse tree
	 */
	void enterEnumMemberList(TypeScriptParser.EnumMemberListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#enumMemberList}.
	 * @param ctx the parse tree
	 */
	void exitEnumMemberList(TypeScriptParser.EnumMemberListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#enumMember}.
	 * @param ctx the parse tree
	 */
	void enterEnumMember(TypeScriptParser.EnumMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#enumMember}.
	 * @param ctx the parse tree
	 */
	void exitEnumMember(TypeScriptParser.EnumMemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#namespaceDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterNamespaceDeclaration(TypeScriptParser.NamespaceDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#namespaceDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitNamespaceDeclaration(TypeScriptParser.NamespaceDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#namespaceName}.
	 * @param ctx the parse tree
	 */
	void enterNamespaceName(TypeScriptParser.NamespaceNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#namespaceName}.
	 * @param ctx the parse tree
	 */
	void exitNamespaceName(TypeScriptParser.NamespaceNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importAliasDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterImportAliasDeclaration(TypeScriptParser.ImportAliasDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importAliasDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitImportAliasDeclaration(TypeScriptParser.ImportAliasDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#decoratorList}.
	 * @param ctx the parse tree
	 */
	void enterDecoratorList(TypeScriptParser.DecoratorListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#decoratorList}.
	 * @param ctx the parse tree
	 */
	void exitDecoratorList(TypeScriptParser.DecoratorListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#decorator}.
	 * @param ctx the parse tree
	 */
	void enterDecorator(TypeScriptParser.DecoratorContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#decorator}.
	 * @param ctx the parse tree
	 */
	void exitDecorator(TypeScriptParser.DecoratorContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#decoratorMemberExpression}.
	 * @param ctx the parse tree
	 */
	void enterDecoratorMemberExpression(TypeScriptParser.DecoratorMemberExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#decoratorMemberExpression}.
	 * @param ctx the parse tree
	 */
	void exitDecoratorMemberExpression(TypeScriptParser.DecoratorMemberExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#decoratorCallExpression}.
	 * @param ctx the parse tree
	 */
	void enterDecoratorCallExpression(TypeScriptParser.DecoratorCallExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#decoratorCallExpression}.
	 * @param ctx the parse tree
	 */
	void exitDecoratorCallExpression(TypeScriptParser.DecoratorCallExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(TypeScriptParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(TypeScriptParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#sourceElement}.
	 * @param ctx the parse tree
	 */
	void enterSourceElement(TypeScriptParser.SourceElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#sourceElement}.
	 * @param ctx the parse tree
	 */
	void exitSourceElement(TypeScriptParser.SourceElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(TypeScriptParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(TypeScriptParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(TypeScriptParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(TypeScriptParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#statementList}.
	 * @param ctx the parse tree
	 */
	void enterStatementList(TypeScriptParser.StatementListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#statementList}.
	 * @param ctx the parse tree
	 */
	void exitStatementList(TypeScriptParser.StatementListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#abstractDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterAbstractDeclaration(TypeScriptParser.AbstractDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#abstractDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitAbstractDeclaration(TypeScriptParser.AbstractDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importStatement}.
	 * @param ctx the parse tree
	 */
	void enterImportStatement(TypeScriptParser.ImportStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importStatement}.
	 * @param ctx the parse tree
	 */
	void exitImportStatement(TypeScriptParser.ImportStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importFromBlock}.
	 * @param ctx the parse tree
	 */
	void enterImportFromBlock(TypeScriptParser.ImportFromBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importFromBlock}.
	 * @param ctx the parse tree
	 */
	void exitImportFromBlock(TypeScriptParser.ImportFromBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importModuleItems}.
	 * @param ctx the parse tree
	 */
	void enterImportModuleItems(TypeScriptParser.ImportModuleItemsContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importModuleItems}.
	 * @param ctx the parse tree
	 */
	void exitImportModuleItems(TypeScriptParser.ImportModuleItemsContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importAliasName}.
	 * @param ctx the parse tree
	 */
	void enterImportAliasName(TypeScriptParser.ImportAliasNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importAliasName}.
	 * @param ctx the parse tree
	 */
	void exitImportAliasName(TypeScriptParser.ImportAliasNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#moduleExportName}.
	 * @param ctx the parse tree
	 */
	void enterModuleExportName(TypeScriptParser.ModuleExportNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#moduleExportName}.
	 * @param ctx the parse tree
	 */
	void exitModuleExportName(TypeScriptParser.ModuleExportNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importedBinding}.
	 * @param ctx the parse tree
	 */
	void enterImportedBinding(TypeScriptParser.ImportedBindingContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importedBinding}.
	 * @param ctx the parse tree
	 */
	void exitImportedBinding(TypeScriptParser.ImportedBindingContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importDefault}.
	 * @param ctx the parse tree
	 */
	void enterImportDefault(TypeScriptParser.ImportDefaultContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importDefault}.
	 * @param ctx the parse tree
	 */
	void exitImportDefault(TypeScriptParser.ImportDefaultContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importNamespace}.
	 * @param ctx the parse tree
	 */
	void enterImportNamespace(TypeScriptParser.ImportNamespaceContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importNamespace}.
	 * @param ctx the parse tree
	 */
	void exitImportNamespace(TypeScriptParser.ImportNamespaceContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#importFrom}.
	 * @param ctx the parse tree
	 */
	void enterImportFrom(TypeScriptParser.ImportFromContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#importFrom}.
	 * @param ctx the parse tree
	 */
	void exitImportFrom(TypeScriptParser.ImportFromContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#aliasName}.
	 * @param ctx the parse tree
	 */
	void enterAliasName(TypeScriptParser.AliasNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#aliasName}.
	 * @param ctx the parse tree
	 */
	void exitAliasName(TypeScriptParser.AliasNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ExportDeclaration}
	 * labeled alternative in {@link TypeScriptParser#exportStatement}.
	 * @param ctx the parse tree
	 */
	void enterExportDeclaration(TypeScriptParser.ExportDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ExportDeclaration}
	 * labeled alternative in {@link TypeScriptParser#exportStatement}.
	 * @param ctx the parse tree
	 */
	void exitExportDeclaration(TypeScriptParser.ExportDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ExportDefaultDeclaration}
	 * labeled alternative in {@link TypeScriptParser#exportStatement}.
	 * @param ctx the parse tree
	 */
	void enterExportDefaultDeclaration(TypeScriptParser.ExportDefaultDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ExportDefaultDeclaration}
	 * labeled alternative in {@link TypeScriptParser#exportStatement}.
	 * @param ctx the parse tree
	 */
	void exitExportDefaultDeclaration(TypeScriptParser.ExportDefaultDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#exportFromBlock}.
	 * @param ctx the parse tree
	 */
	void enterExportFromBlock(TypeScriptParser.ExportFromBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#exportFromBlock}.
	 * @param ctx the parse tree
	 */
	void exitExportFromBlock(TypeScriptParser.ExportFromBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#exportModuleItems}.
	 * @param ctx the parse tree
	 */
	void enterExportModuleItems(TypeScriptParser.ExportModuleItemsContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#exportModuleItems}.
	 * @param ctx the parse tree
	 */
	void exitExportModuleItems(TypeScriptParser.ExportModuleItemsContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#exportAliasName}.
	 * @param ctx the parse tree
	 */
	void enterExportAliasName(TypeScriptParser.ExportAliasNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#exportAliasName}.
	 * @param ctx the parse tree
	 */
	void exitExportAliasName(TypeScriptParser.ExportAliasNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(TypeScriptParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(TypeScriptParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#variableStatement}.
	 * @param ctx the parse tree
	 */
	void enterVariableStatement(TypeScriptParser.VariableStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#variableStatement}.
	 * @param ctx the parse tree
	 */
	void exitVariableStatement(TypeScriptParser.VariableStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#variableDeclarationList}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclarationList(TypeScriptParser.VariableDeclarationListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#variableDeclarationList}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclarationList(TypeScriptParser.VariableDeclarationListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(TypeScriptParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(TypeScriptParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#emptyStatement_}.
	 * @param ctx the parse tree
	 */
	void enterEmptyStatement_(TypeScriptParser.EmptyStatement_Context ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#emptyStatement_}.
	 * @param ctx the parse tree
	 */
	void exitEmptyStatement_(TypeScriptParser.EmptyStatement_Context ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(TypeScriptParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(TypeScriptParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(TypeScriptParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(TypeScriptParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code DoStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterDoStatement(TypeScriptParser.DoStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code DoStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitDoStatement(TypeScriptParser.DoStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code WhileStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(TypeScriptParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code WhileStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(TypeScriptParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ForStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(TypeScriptParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ForStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(TypeScriptParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ForVarStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterForVarStatement(TypeScriptParser.ForVarStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ForVarStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitForVarStatement(TypeScriptParser.ForVarStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ForInStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterForInStatement(TypeScriptParser.ForInStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ForInStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitForInStatement(TypeScriptParser.ForInStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ForVarInStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterForVarInStatement(TypeScriptParser.ForVarInStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ForVarInStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitForVarInStatement(TypeScriptParser.ForVarInStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ForOfStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterForOfStatement(TypeScriptParser.ForOfStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ForOfStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitForOfStatement(TypeScriptParser.ForOfStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ForVarOfStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void enterForVarOfStatement(TypeScriptParser.ForVarOfStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ForVarOfStatement}
	 * labeled alternative in {@link TypeScriptParser#iterationStatement}.
	 * @param ctx the parse tree
	 */
	void exitForVarOfStatement(TypeScriptParser.ForVarOfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#varModifier}.
	 * @param ctx the parse tree
	 */
	void enterVarModifier(TypeScriptParser.VarModifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#varModifier}.
	 * @param ctx the parse tree
	 */
	void exitVarModifier(TypeScriptParser.VarModifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#continueStatement}.
	 * @param ctx the parse tree
	 */
	void enterContinueStatement(TypeScriptParser.ContinueStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#continueStatement}.
	 * @param ctx the parse tree
	 */
	void exitContinueStatement(TypeScriptParser.ContinueStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#breakStatement}.
	 * @param ctx the parse tree
	 */
	void enterBreakStatement(TypeScriptParser.BreakStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#breakStatement}.
	 * @param ctx the parse tree
	 */
	void exitBreakStatement(TypeScriptParser.BreakStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(TypeScriptParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(TypeScriptParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#yieldStatement}.
	 * @param ctx the parse tree
	 */
	void enterYieldStatement(TypeScriptParser.YieldStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#yieldStatement}.
	 * @param ctx the parse tree
	 */
	void exitYieldStatement(TypeScriptParser.YieldStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#withStatement}.
	 * @param ctx the parse tree
	 */
	void enterWithStatement(TypeScriptParser.WithStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#withStatement}.
	 * @param ctx the parse tree
	 */
	void exitWithStatement(TypeScriptParser.WithStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#switchStatement}.
	 * @param ctx the parse tree
	 */
	void enterSwitchStatement(TypeScriptParser.SwitchStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#switchStatement}.
	 * @param ctx the parse tree
	 */
	void exitSwitchStatement(TypeScriptParser.SwitchStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#caseBlock}.
	 * @param ctx the parse tree
	 */
	void enterCaseBlock(TypeScriptParser.CaseBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#caseBlock}.
	 * @param ctx the parse tree
	 */
	void exitCaseBlock(TypeScriptParser.CaseBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#caseClauses}.
	 * @param ctx the parse tree
	 */
	void enterCaseClauses(TypeScriptParser.CaseClausesContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#caseClauses}.
	 * @param ctx the parse tree
	 */
	void exitCaseClauses(TypeScriptParser.CaseClausesContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#caseClause}.
	 * @param ctx the parse tree
	 */
	void enterCaseClause(TypeScriptParser.CaseClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#caseClause}.
	 * @param ctx the parse tree
	 */
	void exitCaseClause(TypeScriptParser.CaseClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#defaultClause}.
	 * @param ctx the parse tree
	 */
	void enterDefaultClause(TypeScriptParser.DefaultClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#defaultClause}.
	 * @param ctx the parse tree
	 */
	void exitDefaultClause(TypeScriptParser.DefaultClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#labelledStatement}.
	 * @param ctx the parse tree
	 */
	void enterLabelledStatement(TypeScriptParser.LabelledStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#labelledStatement}.
	 * @param ctx the parse tree
	 */
	void exitLabelledStatement(TypeScriptParser.LabelledStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#throwStatement}.
	 * @param ctx the parse tree
	 */
	void enterThrowStatement(TypeScriptParser.ThrowStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#throwStatement}.
	 * @param ctx the parse tree
	 */
	void exitThrowStatement(TypeScriptParser.ThrowStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#tryStatement}.
	 * @param ctx the parse tree
	 */
	void enterTryStatement(TypeScriptParser.TryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#tryStatement}.
	 * @param ctx the parse tree
	 */
	void exitTryStatement(TypeScriptParser.TryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#catchProduction}.
	 * @param ctx the parse tree
	 */
	void enterCatchProduction(TypeScriptParser.CatchProductionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#catchProduction}.
	 * @param ctx the parse tree
	 */
	void exitCatchProduction(TypeScriptParser.CatchProductionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#finallyProduction}.
	 * @param ctx the parse tree
	 */
	void enterFinallyProduction(TypeScriptParser.FinallyProductionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#finallyProduction}.
	 * @param ctx the parse tree
	 */
	void exitFinallyProduction(TypeScriptParser.FinallyProductionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#debuggerStatement}.
	 * @param ctx the parse tree
	 */
	void enterDebuggerStatement(TypeScriptParser.DebuggerStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#debuggerStatement}.
	 * @param ctx the parse tree
	 */
	void exitDebuggerStatement(TypeScriptParser.DebuggerStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(TypeScriptParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(TypeScriptParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterClassDeclaration(TypeScriptParser.ClassDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitClassDeclaration(TypeScriptParser.ClassDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#classHeritage}.
	 * @param ctx the parse tree
	 */
	void enterClassHeritage(TypeScriptParser.ClassHeritageContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#classHeritage}.
	 * @param ctx the parse tree
	 */
	void exitClassHeritage(TypeScriptParser.ClassHeritageContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#classTail}.
	 * @param ctx the parse tree
	 */
	void enterClassTail(TypeScriptParser.ClassTailContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#classTail}.
	 * @param ctx the parse tree
	 */
	void exitClassTail(TypeScriptParser.ClassTailContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#classExtendsClause}.
	 * @param ctx the parse tree
	 */
	void enterClassExtendsClause(TypeScriptParser.ClassExtendsClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#classExtendsClause}.
	 * @param ctx the parse tree
	 */
	void exitClassExtendsClause(TypeScriptParser.ClassExtendsClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#implementsClause}.
	 * @param ctx the parse tree
	 */
	void enterImplementsClause(TypeScriptParser.ImplementsClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#implementsClause}.
	 * @param ctx the parse tree
	 */
	void exitImplementsClause(TypeScriptParser.ImplementsClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#classElement}.
	 * @param ctx the parse tree
	 */
	void enterClassElement(TypeScriptParser.ClassElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#classElement}.
	 * @param ctx the parse tree
	 */
	void exitClassElement(TypeScriptParser.ClassElementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PropertyDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterPropertyDeclarationExpression(TypeScriptParser.PropertyDeclarationExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PropertyDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitPropertyDeclarationExpression(TypeScriptParser.PropertyDeclarationExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MethodDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterMethodDeclarationExpression(TypeScriptParser.MethodDeclarationExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MethodDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitMethodDeclarationExpression(TypeScriptParser.MethodDeclarationExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GetterSetterDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterGetterSetterDeclarationExpression(TypeScriptParser.GetterSetterDeclarationExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GetterSetterDeclarationExpression}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitGetterSetterDeclarationExpression(TypeScriptParser.GetterSetterDeclarationExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AbstractMemberDeclaration}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterAbstractMemberDeclaration(TypeScriptParser.AbstractMemberDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AbstractMemberDeclaration}
	 * labeled alternative in {@link TypeScriptParser#propertyMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitAbstractMemberDeclaration(TypeScriptParser.AbstractMemberDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#propertyMemberBase}.
	 * @param ctx the parse tree
	 */
	void enterPropertyMemberBase(TypeScriptParser.PropertyMemberBaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#propertyMemberBase}.
	 * @param ctx the parse tree
	 */
	void exitPropertyMemberBase(TypeScriptParser.PropertyMemberBaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#indexMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterIndexMemberDeclaration(TypeScriptParser.IndexMemberDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#indexMemberDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitIndexMemberDeclaration(TypeScriptParser.IndexMemberDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#generatorMethod}.
	 * @param ctx the parse tree
	 */
	void enterGeneratorMethod(TypeScriptParser.GeneratorMethodContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#generatorMethod}.
	 * @param ctx the parse tree
	 */
	void exitGeneratorMethod(TypeScriptParser.GeneratorMethodContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#generatorFunctionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterGeneratorFunctionDeclaration(TypeScriptParser.GeneratorFunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#generatorFunctionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitGeneratorFunctionDeclaration(TypeScriptParser.GeneratorFunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#generatorBlock}.
	 * @param ctx the parse tree
	 */
	void enterGeneratorBlock(TypeScriptParser.GeneratorBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#generatorBlock}.
	 * @param ctx the parse tree
	 */
	void exitGeneratorBlock(TypeScriptParser.GeneratorBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#generatorDefinition}.
	 * @param ctx the parse tree
	 */
	void enterGeneratorDefinition(TypeScriptParser.GeneratorDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#generatorDefinition}.
	 * @param ctx the parse tree
	 */
	void exitGeneratorDefinition(TypeScriptParser.GeneratorDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#iteratorBlock}.
	 * @param ctx the parse tree
	 */
	void enterIteratorBlock(TypeScriptParser.IteratorBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#iteratorBlock}.
	 * @param ctx the parse tree
	 */
	void exitIteratorBlock(TypeScriptParser.IteratorBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#iteratorDefinition}.
	 * @param ctx the parse tree
	 */
	void enterIteratorDefinition(TypeScriptParser.IteratorDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#iteratorDefinition}.
	 * @param ctx the parse tree
	 */
	void exitIteratorDefinition(TypeScriptParser.IteratorDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#classElementName}.
	 * @param ctx the parse tree
	 */
	void enterClassElementName(TypeScriptParser.ClassElementNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#classElementName}.
	 * @param ctx the parse tree
	 */
	void exitClassElementName(TypeScriptParser.ClassElementNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#privateIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterPrivateIdentifier(TypeScriptParser.PrivateIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#privateIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitPrivateIdentifier(TypeScriptParser.PrivateIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#formalParameterList}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameterList(TypeScriptParser.FormalParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#formalParameterList}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameterList(TypeScriptParser.FormalParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#formalParameterArg}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameterArg(TypeScriptParser.FormalParameterArgContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#formalParameterArg}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameterArg(TypeScriptParser.FormalParameterArgContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#lastFormalParameterArg}.
	 * @param ctx the parse tree
	 */
	void enterLastFormalParameterArg(TypeScriptParser.LastFormalParameterArgContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#lastFormalParameterArg}.
	 * @param ctx the parse tree
	 */
	void exitLastFormalParameterArg(TypeScriptParser.LastFormalParameterArgContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void enterFunctionBody(TypeScriptParser.FunctionBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void exitFunctionBody(TypeScriptParser.FunctionBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#sourceElements}.
	 * @param ctx the parse tree
	 */
	void enterSourceElements(TypeScriptParser.SourceElementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#sourceElements}.
	 * @param ctx the parse tree
	 */
	void exitSourceElements(TypeScriptParser.SourceElementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#arrayLiteral}.
	 * @param ctx the parse tree
	 */
	void enterArrayLiteral(TypeScriptParser.ArrayLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#arrayLiteral}.
	 * @param ctx the parse tree
	 */
	void exitArrayLiteral(TypeScriptParser.ArrayLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#elementList}.
	 * @param ctx the parse tree
	 */
	void enterElementList(TypeScriptParser.ElementListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#elementList}.
	 * @param ctx the parse tree
	 */
	void exitElementList(TypeScriptParser.ElementListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#arrayElement}.
	 * @param ctx the parse tree
	 */
	void enterArrayElement(TypeScriptParser.ArrayElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#arrayElement}.
	 * @param ctx the parse tree
	 */
	void exitArrayElement(TypeScriptParser.ArrayElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#objectLiteral}.
	 * @param ctx the parse tree
	 */
	void enterObjectLiteral(TypeScriptParser.ObjectLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#objectLiteral}.
	 * @param ctx the parse tree
	 */
	void exitObjectLiteral(TypeScriptParser.ObjectLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PropertyExpressionAssignment}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterPropertyExpressionAssignment(TypeScriptParser.PropertyExpressionAssignmentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PropertyExpressionAssignment}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitPropertyExpressionAssignment(TypeScriptParser.PropertyExpressionAssignmentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ComputedPropertyExpressionAssignment}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterComputedPropertyExpressionAssignment(TypeScriptParser.ComputedPropertyExpressionAssignmentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ComputedPropertyExpressionAssignment}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitComputedPropertyExpressionAssignment(TypeScriptParser.ComputedPropertyExpressionAssignmentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PropertyGetter}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterPropertyGetter(TypeScriptParser.PropertyGetterContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PropertyGetter}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitPropertyGetter(TypeScriptParser.PropertyGetterContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PropertySetter}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterPropertySetter(TypeScriptParser.PropertySetterContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PropertySetter}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitPropertySetter(TypeScriptParser.PropertySetterContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MethodProperty}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterMethodProperty(TypeScriptParser.MethodPropertyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MethodProperty}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitMethodProperty(TypeScriptParser.MethodPropertyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PropertyShorthand}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterPropertyShorthand(TypeScriptParser.PropertyShorthandContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PropertyShorthand}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitPropertyShorthand(TypeScriptParser.PropertyShorthandContext ctx);
	/**
	 * Enter a parse tree produced by the {@code SpreadOperator}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterSpreadOperator(TypeScriptParser.SpreadOperatorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code SpreadOperator}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitSpreadOperator(TypeScriptParser.SpreadOperatorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code RestParameterInObject}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void enterRestParameterInObject(TypeScriptParser.RestParameterInObjectContext ctx);
	/**
	 * Exit a parse tree produced by the {@code RestParameterInObject}
	 * labeled alternative in {@link TypeScriptParser#propertyAssignment}.
	 * @param ctx the parse tree
	 */
	void exitRestParameterInObject(TypeScriptParser.RestParameterInObjectContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#getAccessor}.
	 * @param ctx the parse tree
	 */
	void enterGetAccessor(TypeScriptParser.GetAccessorContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#getAccessor}.
	 * @param ctx the parse tree
	 */
	void exitGetAccessor(TypeScriptParser.GetAccessorContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#setAccessor}.
	 * @param ctx the parse tree
	 */
	void enterSetAccessor(TypeScriptParser.SetAccessorContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#setAccessor}.
	 * @param ctx the parse tree
	 */
	void exitSetAccessor(TypeScriptParser.SetAccessorContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#propertyName}.
	 * @param ctx the parse tree
	 */
	void enterPropertyName(TypeScriptParser.PropertyNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#propertyName}.
	 * @param ctx the parse tree
	 */
	void exitPropertyName(TypeScriptParser.PropertyNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(TypeScriptParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(TypeScriptParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void enterArgumentList(TypeScriptParser.ArgumentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void exitArgumentList(TypeScriptParser.ArgumentListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#argument}.
	 * @param ctx the parse tree
	 */
	void enterArgument(TypeScriptParser.ArgumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#argument}.
	 * @param ctx the parse tree
	 */
	void exitArgument(TypeScriptParser.ArgumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeScriptParser#expressionSequence}.
	 * @param ctx the parse tree
	 */
	void enterExpressionSequence(TypeScriptParser.ExpressionSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeScriptParser#expressionSequence}.
	 * @param ctx the parse tree
	 */
	void exitExpressionSequence(TypeScriptParser.ExpressionSequenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TemplateStringExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterTemplateStringExpression(TypeScriptParser.TemplateStringExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TemplateStringExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitTemplateStringExpression(TypeScriptParser.TemplateStringExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GeneratorsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterGeneratorsExpression(TypeScriptParser.GeneratorsExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GeneratorsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitGeneratorsExpression(TypeScriptParser.GeneratorsExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PowerExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterPowerExpression(TypeScriptParser.PowerExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PowerExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitPowerExpression(TypeScriptParser.PowerExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code InExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterInExpression(TypeScriptParser.InExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code InExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitInExpression(TypeScriptParser.InExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GenericTypes}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterGenericTypes(TypeScriptParser.GenericTypesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GenericTypes}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitGenericTypes(TypeScriptParser.GenericTypesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code OptionalChainExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterOptionalChainExpression(TypeScriptParser.OptionalChainExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code OptionalChainExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitOptionalChainExpression(TypeScriptParser.OptionalChainExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ArgumentsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterArgumentsExpression(TypeScriptParser.ArgumentsExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ArgumentsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitArgumentsExpression(TypeScriptParser.ArgumentsExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ThisExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterThisExpression(TypeScriptParser.ThisExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ThisExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitThisExpression(TypeScriptParser.ThisExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TypeofExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterTypeofExpression(TypeScriptParser.TypeofExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TypeofExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitTypeofExpression(TypeScriptParser.TypeofExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GeneratorsFunctionExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterGeneratorsFunctionExpression(TypeScriptParser.GeneratorsFunctionExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GeneratorsFunctionExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitGeneratorsFunctionExpression(TypeScriptParser.GeneratorsFunctionExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code EqualityExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterEqualityExpression(TypeScriptParser.EqualityExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code EqualityExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitEqualityExpression(TypeScriptParser.EqualityExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitXOrExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitXOrExpression(TypeScriptParser.BitXOrExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BitXOrExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitBitXOrExpression(TypeScriptParser.BitXOrExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code CastAsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterCastAsExpression(TypeScriptParser.CastAsExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code CastAsExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitCastAsExpression(TypeScriptParser.CastAsExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MultiplicativeExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterMultiplicativeExpression(TypeScriptParser.MultiplicativeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MultiplicativeExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitMultiplicativeExpression(TypeScriptParser.MultiplicativeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitShiftExpression}
	 * labeled alternative in {@link TypeScriptParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitShiftExpression(TypeScriptParser.BitShiftExpressionContext ctx);

}